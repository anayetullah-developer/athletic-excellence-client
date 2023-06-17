import useAdmin from "../../../Hooks/useAdmin";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useInstructor from "../../../Hooks/useInstructor";

const PopularCard = ({popularEach}) => {
    const [, , isAdmin] = useAdmin();
  const [, , isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();

  console.log(isAdmin, isInstructor)

  const { _id, instructorName, name, photoURL, email, seats, price } =
    popularEach;
    let convertedSeat = parseFloat(seats)

  const handleSelect = async () => {
    const response = await axiosSecure.post("/student/selectedClass", {
      classId: _id,
      instructorName,
      name,
      photoURL,
      email,
      seats,
      price,
    });

    console.log(response);
  };

    return (
        <div>
      <div
        className={`max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden ${
          convertedSeat < 1 ? `bg-red-300 text-white` : `text-gray-600`
        }`}
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={photoURL}
          alt="Class Image"
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className=" mb-4">Instructor: {instructorName}</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Price: ${price}</p>
            <p className="font-semibold">Available Seats: {seats}</p>
          </div>
          <button
          disabled = {!isAdmin || !isInstructor || convertedSeat === 0}
            className={`btn bg-gray-800 hover:bg-gray-900 text- mt-5 text-white ${
              seats === "0" ? `text-white` : `text-gray-700`
            }`}
            onClick={handleSelect}
          >
            Select
          </button>
        </div>
      </div>
    </div>
    );
};

export default PopularCard;