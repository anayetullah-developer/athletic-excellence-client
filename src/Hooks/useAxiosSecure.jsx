// import { useContext, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://summer-camp-server-teal.vercel.app",
});

const useAxiosSecure = () => {
  // const { logoutUser, loading, user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          console.log(error);
          // await logoutUser();
          // navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return [axiosSecure];
};

export default useAxiosSecure;
