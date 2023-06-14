import useClasses from "../../Hooks/useClasses";
import ClassCard from "../Components/UIComponents/ClassCard";

const Classes = () => {
  const [, myClasses] = useClasses();
  console.log(myClasses);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {myClasses.map((myClass) => (
          <ClassCard key={myClass._id} myClass={myClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
