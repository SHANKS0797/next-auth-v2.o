import { loginCredentials } from "@/types";
import axios from "axios";

// -------------------- USER LOGIN HANDLER --------------------
export const handleUserLogin = async (credentials: loginCredentials) => {
  try {
    const loginResponse = await axios.post(
      `${process.env.BASE_URL}/api/Authentication/authenticate`,
      credentials
    );
    if (!loginResponse.data.success) {
      throw new Error("Invalid Credentials");
    } else {
      return loginResponse.data;
    }
  } catch (error) {
    throw new Error("Request could not be processed");
  }
};
