import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProviders";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";

const Main = () => {
  const {loading} = useContext(AuthContext);
  const {isDarkTheme} = useContext(ThemeContext);
  console.log(isDarkTheme);
  
  
  return (
    <div>
      {/* {loading ? (
        <p className="font-semibold">Loading</p>
      ) : ( */}
        <div className= {isDarkTheme? "bg-[#1D232A] text-[#FBFBFE]" : "bg-white text-black"}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      {/* )} */}
    </div>
  );
};

export default Main;
