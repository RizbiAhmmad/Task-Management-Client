import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import TaskBoard from "../Pages/TaskBoard";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'tasks',
          element: <TaskBoard></TaskBoard>
        }
      ]
    },
  ]);