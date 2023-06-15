import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProviders";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddClass = () => {
  const { user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // reset();
    const response = await axiosSecure.post("/instructor/addClass", {
       ...data
    })
    console.log(response);
  };
  return (
    <div className="w-3/5 md:mx-auto py-10">
      <h2 className="text-center text-5xl mb-10">Add A Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            placeholder="Instructor Name"
            value={user?.displayName}
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Instructor Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Class Name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Class Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="url"
            {...register("photoURL", { required: true })}
            placeholder="Image URL"
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-600">Class Image is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input input-bordered"
            value={user?.email}
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("seats", { required: true })}
            placeholder="Available Seats"
            className="input input-bordered"
          />
          {errors.seats && (
            <span className="text-red-600">Seats is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered"
          />
          {errors.price && (
            <span className="text-red-600">Price is required</span>
          )}
        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
