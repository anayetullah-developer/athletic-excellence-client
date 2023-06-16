import Lottie from "lottie-react";
import errorImg from "../../assets/99436-404-page.json"
import { useRouteError } from "react-router-dom";
const Error = () => {
    const { error, status } = useRouteError();
  return (
    <div className="flex justify-center">
        <div className="">
        <h1 className="text-4xl font-extrabold text-center">{status}</h1>
        <h3 className="text-2xl font-semibold text-center">{error.message}</h3>
        <div className="">
        <Lottie animationData={errorImg} loop={true}/>
        </div>
        </div>
    </div>
  );
};

export default Error;
