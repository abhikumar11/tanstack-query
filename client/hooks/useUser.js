import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/AxiosInterseptors";

const useUser = () => {
  const queryClient = useQueryClient();

  const addUser = useMutation({
      mutationFn: async (user) => {
        const response = await axiosInstance.post("/add", user);
        return response;
      },
      onSuccess:() => {
        alert("User added successfully");
         queryClient.invalidateQueries({ queryKey: ["users"] })
      },
      onError: (error) => {
        alert("Error adding user:", error);
      },  
    }) 
   
  const getAllUsers=useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axiosInstance.get("/getAllUsers");
            return response?.users ?? [];
        }, 
        staleTime:10*1000,
    });

  const deleteUser =useMutation({
    mutationFn: async (userId) => {
      await axiosInstance.delete(`/delete/${userId}`);
    },
    onSuccess:() => {
      alert("User deleted successfully");
       queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error) => {
      alert("Error deleting user:", error);
    },
  })

  const updateUser = useMutation({
    mutationFn: async ( { userId, updatedData } ) => {
      const response = await axiosInstance.put(`/update/${userId}`, updatedData);
      return response;
    },
    onSuccess:() => {
      alert("User updated successfully");
       queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error) => {
      alert("Error updating user:", error);
    },
  });

    return { addUser, getAllUsers, deleteUser, updateUser };
}

export default useUser;
