import axios from "axios";
import { useAuthStore } from "@/store/AuthStore";

export const fetchUser = async () => {
  const token = useAuthStore.getState().token;

  const options = {
    method: "GET",
    url: "https://api.freeapi.app/api/v1/users/current-user",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
