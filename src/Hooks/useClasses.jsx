import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useContext(AuthContext);

    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['myClasses'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/instructor/myClasses?email=${user?.email}`);
            return response.data;
        },

    

      })

      return [refetch, myClasses]

};

export default useClasses;