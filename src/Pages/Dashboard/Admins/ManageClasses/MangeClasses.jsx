import useClasses from "../../../../Hooks/useClasses";

const MangeClasses = () => {
    const [, myClasses] = useClasses();
    return (
        <div>
           <div className="flex gap-3 justify-center mt-5 items-center font-semibold uppercase text-2xl">
        <h1>Total Enrolled Students: {myClasses?.length}</h1>
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
            {myClasses?.map((myClass, index) => {
              return (
                <tr key={myClass._id}>
                  <td>{index + 1}</td>
                  <td><img src={myClass.photoURL} alt="" />Image to do</td>
                  <td>{myClass.name}</td>
                  <td>{myClass.instructorName}</td>
                  <td>{myClass.email}</td>
                  <td>{myClass.price}</td>
                  <td>pending</td>
                  <td>{myClass.seats}</td>
                  <td>Admin will provide it</td>
                  <td>
                    <button className="btn btn-xs">Approve</button>
                    <button className="btn btn-xs mt-2">Deny</button>
                    <button className="btn btn-xs mt-2">Feedback</button>
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