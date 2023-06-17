import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['myClasses'],
       
        queryFn: async () => {
            const response = await axiosSecure.get(`/allClasses`);
            return response.data;
        },

    

      })

      return [refetch, allClasses]
};

export default useAllClasses;