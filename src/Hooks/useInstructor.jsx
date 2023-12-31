import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProviders";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext); 
    const [axiosSecure] = useAxiosSecure();
    const { refetch, isLoading: isInstructorLoading, data: isInstructor = [] } = useQuery({
        queryKey: ['instructor', user?.email],
        enabled: !loading,
        queryFn:  async () => {
            const response =  await axiosSecure(`/users/instructor/${user?.email}`);
            
            return response.data.instructor;
            
        },
  
      })
      return [refetch, isInstructorLoading, isInstructor];
};

export default useInstructor;