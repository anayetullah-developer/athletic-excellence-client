// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useClasses from "../../../../Hooks/useClasses";

const MyClasses = () => {
    const [, myClasses] = useClasses();
    console.log(myClasses);
    
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
                  <td>{myClass.status ? myClass.status : "Pending"}</td>
                  <td>{myClass.seats}</td>
                  <td>{myClass.feedback ? myClass.feedback : "No feedback"}</td>
                  <td><Link to={`/dashboard/instructor/myClasses/${myClass._id}`}><button className="btn">Update</button></Link></td>
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

export default MyClasses;
