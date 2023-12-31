import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Components/DashboardComponents/Sidebar";
import DashboardNavbar from "../Pages/Components/DashboardComponents/DashboardNavbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Dashboard = () => {
  const {loading} = useContext(AuthContext);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Dashboard</div>
            <div className="flex-none hidden lg:block">
              <DashboardNavbar/>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
