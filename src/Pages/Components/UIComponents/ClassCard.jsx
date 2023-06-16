import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ClassCard = ({ singleClass }) => {
  const [axiosSecure] = useAxiosSecure();

  const {instructorName, name, photoURL, email, seats, price } = singleClass;
 
  const handleSelect = async () => {
    const response = await axiosSecure.post("/student/selectedClass", {
       instructorName, name, photoURL, email, seats, price 
    });

    console.log(response);
  };

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
            {name}
          </h2>
          <p className="text-gray-600 mb-4">Instructor: {instructorName}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Price: ${price}</p>
            <p className="text-gray-700 font-semibold">Available Seats: {seats}</p>
          </div>
          <button className="btn mt-5" onClick={handleSelect}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
