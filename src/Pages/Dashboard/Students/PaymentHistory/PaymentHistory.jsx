import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure();
    const { loading } = useContext(AuthContext);

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ["paymentHistory"],
        enabled: !loading,
        queryFn: async () => {
          const response = await axiosSecure.get(`/student/payment-history`);
          return response.data;
        },
      });

    return (
        <div>
      <div className="flex gap-3 justify-center mt-5 items-center font-semibold uppercase text-2xl">
        <h1>Total Selected Classes: {paymentHistory?.length}</h1>
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
            {paymentHistory?.map((selectedClass, index) => {
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

export default PaymentHistory;