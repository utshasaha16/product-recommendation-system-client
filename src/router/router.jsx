import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import AddQueries from "../pages/AddQueries/AddQueries";
import MyQueries from "../pages/MyQueries/MyQueries";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/logIn",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addQueries",
          element: <AddQueries></AddQueries>
        },
        {
          path: "/myQueries",
          element: <MyQueries></MyQueries>
        }
      ]
    },
  ]);

  export default router;