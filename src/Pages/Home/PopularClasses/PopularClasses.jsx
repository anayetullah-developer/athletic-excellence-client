import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PopularCard from "../../Components/UIComponents/PopularCard";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: popular = [] } = useQuery({
    queryKey: ["popular-class"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/popular-classes`);
      console.log(popular);
      return response.data;
    },
  });

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-extrabold text-center uppercase my-12">
        Popular Classes
      </h2>
      <div className="md:grid grid-cols-4 gap-10 w-[90%] mx-auto">
            {
                popular.map(popularEach => <PopularCard key={popularEach?._id} popularEach={popularEach}/>)
            }
      </div>
    </div>
  );
};

export default PopularClasses;
