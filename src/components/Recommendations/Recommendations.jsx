import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const fetchRecommendations =async () => {
       try{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/userRecommendation`);
        setRecommendations(data)
       }
       catch(error){
        console.log(error);
       }
    };
    useEffect(() => {
        fetchRecommendations()
    }, [])
    console.log(recommendations);
    return (
        <div>
            hello form recomendations
        </div>
    );
};

export default Recommendations;