import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const {user, loading} = useContext(AuthContext); 
  const [axiosSecure] = useAxiosSecure();
  const { refetch, isLoading: isAdminLoading, data: isAdmin = [] } = useQuery({
      queryKey: ['isAdmin', user?.email],
      enabled: !loading,
      queryFn:  async () => {
          const response =  await axiosSecure(`/users/admin/${user?.email}`);
          
          return response.data.admin;
          
      },

    })

    console.log(isAdmin)
    return [refetch, isAdminLoading, isAdmin];
    
};

export default useAdmin;