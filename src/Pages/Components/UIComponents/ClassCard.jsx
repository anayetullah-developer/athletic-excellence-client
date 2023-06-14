import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ClassCard = ({myClass}) => {
  const [axiosSecure] = useAxiosSecure();
    console.log(myClass);
    const handleSelect = async() => {
        const response = await axiosSecure.post("/instructor/addClass", {
            ...myClass
         })

         console.log(response);
    }
  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center"
          src="class-image.jpg"
          alt="Class Image"
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Sport Class Name
          </h2>
          <p className="text-gray-600 mb-4">Instructor: John Doe</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Price: $20</p>
            <p className="text-gray-700 font-semibold">Available Seats: 10</p>
          </div>
          <button className="btn mt-5" onClick={handleSelect}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
