import useAllClasses from "../../Hooks/useAllClasses";
import ClassCard from "../Components/UIComponents/ClassCard";

const Classes = () => {
  const [, allClasses] = useAllClasses();
  console.log(allClasses);
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-extrabold text-center uppercase my-8">Available Classes</h2>
      <div className="md:grid grid-cols-3 gap-10">
        {allClasses.map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
