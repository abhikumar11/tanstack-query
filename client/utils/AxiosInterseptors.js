import axios from "axios";

const axiosInstance = axios.create({
     baseURL: "http://localhost:3001/api/user/",
});

axiosInstance.interceptors.response.use(
     (res) => {
          return res.data;
     },
     (error) => {
          const message =
               error.response?.data?.message || "Something went wrong";

          if (error.response?.status === 500) {
               console.error("Server error. Please try again later.");
          }
          error.readableMessage = message;
          return Promise.reject(error);
     },
);
export default axiosInstance;
