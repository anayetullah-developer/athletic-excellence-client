import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";


const DashboardNavbar = () => {
  const {logoutUser, user} = useContext(AuthContext)
  const navigate = useNavigate();

   const handleLogOut = () => {
    logoutUser()
            .then(() => {
              // Sign-out successful.
            })
            .catch(() => {
              // An error happened.
            });

          navigate('/dashboard')

  }

  return (
    <div>
        <div>
          <div className="navbar-end">
            <div className="flex gap-3">
              {user ? (
                <Link
                  to="/login"
                  className=" mx-4 btn md:btn-md sm: btn-sm"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              ) : (
                <Link to="" className=" mx-4 btn md:btn-md sm: btn-sm">
                  Login
                </Link>
              )}
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashboardNavbar;
