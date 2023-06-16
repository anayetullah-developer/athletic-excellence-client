import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [, isInstructorLoading, isInstructor] = useInstructor();
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