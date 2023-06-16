import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <p className="text-3xl">Loading</p>
      ) : (
        <div>
          <div className="navbar-end">
            <div className="flex gap-3">
              <Link to="/login" className="btn md:mx-4">Login</Link>
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
