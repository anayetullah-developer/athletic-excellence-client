import { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState("password");
  const { registerUser, updateUser, logoutUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset()

    registerUser(data.email, data.password)
      .then(() => {
        updateUser(data.name, data.photoURL)
          .then(() => {})
          .catch(() => {});

        logoutUser()
          .then(() => {
            // Sign-out successful.
          })
          .catch(() => {
            // An error happened.
          });

        navigate("/login");
      })
      .catch(() => {});
  };

  const showPassword = (condition) => {
    setShow(!show)
    if(!condition) {
      setInputType("text")
    }else {
      setInputType("password")
    }
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl md:w-4/5 md:mx-auto">
      <div className="w-2/5 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={inputType}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered w-full"
              />
               {show ?
                    <FaEyeSlash className="absolute right-5 top-1/3" onClick={() => showPassword(true)} />
                    :
                    <FaEye className="absolute right-5 top-1/3" onClick={() => showPassword(false)} />
                }
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        <p>
          <small>
            Already have an account <Link to="/login">Login</Link>
          </small>
        </p>
      </div>
      <div className="card-body w-3/5">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
