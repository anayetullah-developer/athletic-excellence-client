import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

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
              <a className="btn md:mx-4">Button</a>
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
