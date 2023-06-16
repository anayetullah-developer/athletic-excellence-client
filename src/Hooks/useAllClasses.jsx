import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {loading} = useContext(AuthContext);

    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['myClasses'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/allClasses`);
            return response.data;
        },

    

      })

      return [refetch, allClasses]
};

export default useAllClasses;