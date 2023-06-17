import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import InstructorCard from "../Components/UIComponents/InstructorCard";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors", { role: "instructor" }],
    queryFn: async () => {
      const response = await axiosSecure.get(`/allInstructors`);
      console.log(instructors);
      return response.data;
    },
  });

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-extrabold text-center uppercase my-8">
        Our instructors
      </h2>
      <div className="md:grid gap-10 grid-cols-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor?._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
