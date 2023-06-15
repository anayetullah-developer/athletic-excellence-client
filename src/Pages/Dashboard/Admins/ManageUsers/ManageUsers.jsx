import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useContext } from "react";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then(response => {
        if(response.data.modifiedCount) {
            refetch();
        }
    })
  } 
  const handleMakeInstructor = (id) => {
    axiosSecure.patch(`/users/instructor/${id}`)
    .then(response => {
        if(response.data.modifiedCount) {
            refetch();
        }
    })
  } 

  return (
    <div>
      <div className="flex gap-3 items-center font-semibold uppercase text-2xl">
        <h1>Total Items: {users?.length}</h1>
        <button className="btn btn-warning">Pay here</button>
      </div>

      <div className="overflow-x-auto mt-5 my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role === "admin" ? "Admin" : user.role === "instructor" ? "Instructor" : "Student"}</td>
                  <th>
                    <button
                      disabled = {user.role === "admin" ? "disabled" : ""}
                      className="btn btn-primary btn-xs mr-2"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                    <button disabled = {user.role === "instructor" ? "instructor" : ""}
                      className="btn btn-primary btn-xs"
                      onClick={() => handleMakeInstructor(user._id)}>
                      Make Instructor
                    </button>
                  </th>
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

export default ManageUsers;
