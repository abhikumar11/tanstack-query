import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/AxiosInterseptors";

const useUser = () => {
  const addUser = (user) => {
    console.log("Adding user:", user);
  };
  const getAllUsers=useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axiosInstance.get("/getAllUsers");
            return response?.users;
        }, 
        staleTime:10*1000,
    });

  const deleteUser = (userId) => {
    console.log("Deleting user with ID:", userId);
  
  };

  const updateUser = (userId, updatedData) => {
    console.log("Updating user with ID:", userId, "with data:", updatedData);
   
  };

    return { addUser, getAllUsers, deleteUser, updateUser };
}
export default useUser;