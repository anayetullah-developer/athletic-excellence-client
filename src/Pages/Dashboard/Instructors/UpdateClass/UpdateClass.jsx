import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
// import { useForm } from "react-hook-form";

const UpdateClass = () => {
    const updateClassInfo = useLoaderData();
    const {name, photoURL, instructorName, price, email, seats, _id} = updateClassInfo.data;
    const [axiosSecure] = useAxiosSecure();

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      reset();
      const response = await axiosSecure.patch(`/instructor/updateClass/${_id}`, {
         ...data
      })
      console.log(response);
    };
  

    return (
      <div className="w-3/5 md:mx-auto py-10">
        <h2 className="text-center text-5xl mb-10">Update Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              placeholder="Instructor Name"
              value={instructorName}
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
              defaultValue={name}
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
              defaultValue={photoURL}
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
              value={email}
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
              defaultValue={seats}
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
              defaultValue={price}
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-red-600">Price is required</span>
            )}
          </div>
  
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
};

export default UpdateClass;