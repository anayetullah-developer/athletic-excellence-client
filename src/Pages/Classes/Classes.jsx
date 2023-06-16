import useAllClasses from "../../Hooks/useAllClasses";
import ClassCard from "../Components/UIComponents/ClassCard";

const Classes = () => {
  const [, allClasses] = useAllClasses();
  console.log(allClasses);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {allClasses.map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
