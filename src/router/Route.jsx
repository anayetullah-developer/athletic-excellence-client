import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";


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
                path: "/classes",
                element: <Classes/>
            },
            {
                path: "/instructors",
                element: <PopularInstructors/>
            },
        ]
    },

    {
        path: "dashboard",
        element: <Dashboard/>,
        errorElement: <Error/>,
    }
])