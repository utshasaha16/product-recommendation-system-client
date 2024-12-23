import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";



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
        }
      ]
    },
  ]);

  export default router;