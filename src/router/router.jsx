import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import AddQueries from "../pages/AddQueries/AddQueries";
import MyQueries from "../pages/MyQueries/MyQueries";
import QueryDetails from "../components/QueryDetails/QueryDetails";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
import PrivateRoute from "./PrivateRoute";
import Queries from "../pages/Queries/Queries";
import MyRecommendation from "../pages/myRecommendation/myRecommendation";
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addQueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRecommendation",
        element: (
          <PrivateRoute>
            <MyRecommendation></MyRecommendation>
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendationForMe",
        element: (
          <PrivateRoute>
            <RecommendationForMe></RecommendationForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/queryDetails/:id",
        element: (
          <PrivateRoute>
            <QueryDetails></QueryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://product-recommendation-system-server-eight.vercel.app/recommendations/${params.id}`),
      },
      {
        path: "/updateQueries/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({ params }) =>
          fetch(`https://product-recommendation-system-server-eight.vercel.app/recommendations/${params.id}`),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
