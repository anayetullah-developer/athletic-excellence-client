const PopularInstructorCard = ({instructor}) => {
  return (
    <div>
      <div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-[255px] object-cover"
            src={instructor.photoURL}
            alt="Instructor Image"
          />
          <div className="px-8 py-6">
            <div className="font-bold text-2xl mb-4">{instructor.name}</div>
            <p className="text-gray-700 text-base">Email: {instructor.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
