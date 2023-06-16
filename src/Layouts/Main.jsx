import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";

const Main = () => {
  const {isDarkTheme} = useContext(ThemeContext);
  console.log(isDarkTheme);
  
  
  return (
    <div>
        <div className= {isDarkTheme? "bg-[#1D232A] text-[#FBFBFE]" : "bg-white text-black"}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    </div>
  );
};

export default Main;
