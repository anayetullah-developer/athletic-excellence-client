import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);

  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/student/selectedClasses`);
      return response.data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure.delete(`/student/selectedClass/${id}`)
    .then((result) => {
      if (result.data.deletedCount > 0) {
        console.log(result);
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="flex gap-3 justify-center mt-5 items-center font-semibold uppercase text-2xl">
        <h1>Total Selected Classes: {selectedClasses?.length}</h1>
      </div>

      <div className="overflow-x-auto mt-5 my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Class Image</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses?.map((selectedClass, index) => {
              return (
                <tr key={selectedClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={selectedClass.photoURL} alt="" />
                    Image to do
                  </td>
                  <td>{selectedClass.name}</td>
                  <td>{selectedClass.instructorName}</td>
                  <td>{selectedClass.price}</td>
                  <td>{selectedClass.seats}</td>
                  <td>
                    <button className="btn mr-3" onClick={() => handleDelete(selectedClass._id)}>
                      Delete
                    </button>
                    <Link to={`/dashboard/student/payment/${selectedClass._id}`}><button className="btn">Enroll</button></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
