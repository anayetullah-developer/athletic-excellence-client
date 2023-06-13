import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "classes",
                element: <Classes/>
            },

            {
                path: "instructors",
                element: <Instructors/>
            },

            {
                path: "login",
                element: <Login/>
            },

            {
                path: "register",
                element: <Register/>
            },
        ]
    },

    {
        path: "dashboard",
        element: <Dashboard/>,
        errorElement: <Error/>,
    }
])