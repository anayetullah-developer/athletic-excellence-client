import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PopularInstructorCard from "../../Components/UIComponents/PopularInstructorCard";

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: PopularInstructors = [] } = useQuery({
      queryKey: ["popular-instructors"],
      queryFn: async () => {
        const response = await axiosSecure.get(`/popular-instructors`);
        console.log(PopularInstructors);
        return response.data;
      },
    });
    return (
        <div className="mt-20">
        <h2 className="text-4xl font-extrabold text-center uppercase my-12">
         Popular instructors
        </h2>
        <div className="md:grid grid-cols-4 gap-10 w-[90%] mx-auto">
              {
                  PopularInstructors.map(instructor => <PopularInstructorCard key={instructor?._id} instructor={instructor}/>)
              }
        </div>
      </div>
    );
};

export default PopularInstructors;