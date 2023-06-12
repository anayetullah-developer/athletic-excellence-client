import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PopularClasses from "../Pages/Home/PopularClasses/PopularClasses";


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
                path: "popular-classes",
                element: <PopularClasses/>
            },

            {
                path: "popular-instructors",
                element: <PopularInstructors/>
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