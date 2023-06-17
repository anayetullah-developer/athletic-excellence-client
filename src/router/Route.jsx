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
import Feedback from "../Pages/Dashboard/Admins/Feedback/Feedback";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
// const Route = () => {
    // const [axiosSecure] = useAxiosSecure();
   export const router = createBrowserRouter([
        {
          path: "/",
          element: <Main />,
          errorElement: <Error />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
      
            {
              path: "classes",
              element: <Classes />,
            },
      
            {
              path: "instructors",
              element: <Instructors />,
            },
      
            {
              path: "login",
              element: <Login />,
            },
      
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      
        {
          path: "dashboard",
          element: <Dashboard />,
          errorElement: <Error />,
          children: [
            {
              path: "student/enrolled-classes",
              element: <EnrolledClasses />,
            },
            {
              path: "student/selected-classes",
              element: <SelectedClasses />,
            },
            {
              path: "student/payment-history",
              element: <PaymentHistory />,
            },
            {
              path: "student/payment/:id",
              element: <Payment/>,
              loader: ({ params }) =>
                fetch(`https://summer-camp-server-teal.vercel.app/student/payment/${params.id}`),
            },
            
            {
              path: "instructors/add-class",
              element: <InstructorRoute><AddClass /></InstructorRoute>,
            },
            {
              path: "instructors/my-classes",
              element: <InstructorRoute><MyClasses /></InstructorRoute>,
            },
      
            {
              path: "instructor/myClasses/:id",
              element: <InstructorRoute><UpdateClass /></InstructorRoute>,
              loader: ({ params }) =>
              fetch(`https://summer-camp-server-teal.vercel.app/instructor/myClasses/${params.id}`),
            },
      
            {
              path: "admin/manage-users",
              element: <AdminRoute><ManageUsers /></AdminRoute>,
            },
            {
              path: "admin/manage-classes",
              element: <AdminRoute><MangeClasses /></AdminRoute>,
            },
            {
              path: "admin/manage-users/feedback/:id",
              element: <AdminRoute><Feedback /></AdminRoute>,
              loader: ({ params }) =>
                fetch(`https://summer-camp-server-teal.vercel.app/instructor/myClasses/${params.id}`),
            },
          ],
        },
      ]);

      // return router;
// };

// export default Route;
