import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToy from "../pages/AllToy/AllToy";
import MyToy from "../pages/MyToy/MyToy";
import SingleToy from "../pages/Home/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/allToy',
        element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
      },
      {
        path: "/addAToy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "/myToy",
        element: <MyToy></MyToy>
      },
      {
        path:'/singleToy/:id',
        element:<SingleToy></SingleToy>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

export default router; 