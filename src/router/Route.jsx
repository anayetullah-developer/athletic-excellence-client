import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>
    }
])