import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <p className="font-semibold">Loading</p>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
