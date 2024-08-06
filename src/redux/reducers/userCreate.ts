import axios from "axios";
import { getUser } from "./userSlice";

export const fetchUser = () => async (useAppDisaptch: any) => {
  try {
    const res = await axios.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
    useAppDisaptch(getUser(res.data));
  } catch (error: any) {
    useAppDisaptch(error.message);
  }
};
