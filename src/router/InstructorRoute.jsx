import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../Hooks/useAdmin";

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [, isInstructorLoading, isInstructor] = useAdmin();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default InstructorRoute;