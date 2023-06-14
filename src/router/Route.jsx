import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import EnrolledClasses from "../Pages/Dashboard/Students/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../Pages/Dashboard/Students/SelectedClasses/SelectedClasses";
import PaymentHistory from "../Pages/Dashboard/Students/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Dashboard/Instructors/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses/MyClasses";
import ManageUsers from "../Pages/Dashboard/Admins/ManageUsers/ManageUsers";
import MangeClasses from "../Pages/Dashboard/Admins/ManageClasses/MangeClasses";
import UpdateClass from "../Pages/Dashboard/Instructors/UpdateClass/UpdateClass";
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
        children: [
            {
                path: "students/selected-classes",
                element: <EnrolledClasses/>
            },
            {
                path: "student/enrolled-classes",
                element: <SelectedClasses/>
            },
            {
                path: "student/payment-history",
                element: <PaymentHistory/>
            },
            {
                path: "instructors/add-class",
                element: <AddClass/>
            },
            {
                path: "instructors/my-classes",
                element: <MyClasses/>
            },

            {
                path: "instructor/myClasses/:id",
                element: <UpdateClass />,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/instructor/myClasses/${params.id}`),
              },

            {
                path: "admin/manage-users",
                element: <ManageUsers/>
            },
            {
                path: "admin/manage-classes",
                element: <MangeClasses/>
            },

            
        ]
    }
])