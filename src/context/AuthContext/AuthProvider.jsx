import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);

            if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {withCredentials: true})
                .then(res => {
                    console.log("log in",res.data)
                    setLoading(false);
                })

            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logOut`, {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log("log out",res.data)
                    setLoading(false);
                })
            }

            
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        updateUserProfile,
        googleLogIn
    }

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
  )
};

export default AuthProvider;
