import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAllClasses from "../../../../Hooks/useAllClasses";

const MangeClasses = () => {
  const [axiosSecure] = useAxiosSecure();

    const [refetch, allClasses] = useAllClasses();
    
    const handleApproveStatus = (id) => {
      axiosSecure.patch(`/classes/approved/${id}`)
      .then(response => {
          if(response.data.modifiedCount) {
              refetch();
          }
      })
    } 
    const handleDenyStatus = (id) => {
      axiosSecure.patch(`/classes/denied/${id}`)
      .then(response => {
          if(response.data.modifiedCount) {
              refetch();
          }
      })
    } 
    return (
        <div>
           <div className="flex gap-3 justify-center mt-5 items-center font-semibold uppercase text-2xl">
        <h1>Total Enrolled Students: {allClasses?.length}</h1>
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
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Available Seats</th>
              <th>Feadback</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((myClass, index) => {
              return (
                <tr key={myClass._id}>
                  <td>{index + 1}</td>
                  <td><img src={myClass.photoURL} alt="" />Image to do</td>
                  <td>{myClass.name}</td>
                  <td>{myClass.instructorName}</td>
                  <td>{myClass.email}</td>
                  <td>{myClass.price}</td>
                  <td>{myClass.status === "approved" ? "Approved" : myClass.status === "denied" ? "Denied" : "Pending"}</td>
                  <td>{myClass.seats}</td>
                  <td>Admin will provide it</td>
                  <td>
                  <button
                      disabled = {myClass.status === "approved" ? "disabled" : ""}
                      className="btn btn-primary btn-xs mr-2"
                      onClick={() => handleApproveStatus(myClass._id)}
                    >
                     Approve
                    </button>
                    <button
                      disabled = {myClass.status === "denied" ? "disabled" : ""}
                      className="btn btn-primary btn-xs mr-2"
                      onClick={() => handleDenyStatus(myClass._id)}
                    >
                     Deny
                    </button>
                    <Link to={`/dashboard/admin/manage-users/feedback/${myClass._id}`}><button className="btn btn-xs btn-primary mt-2">Feedback</button></Link>
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

export default MangeClasses;