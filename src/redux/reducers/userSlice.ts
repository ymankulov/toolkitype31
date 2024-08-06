import { createSlice } from "@reduxjs/toolkit";
import { IStateInitial } from "../../types/user";

const initialState: IStateInitial = {
  user: [],
};

export const UserSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { getUser } = UserSlice.actions;
