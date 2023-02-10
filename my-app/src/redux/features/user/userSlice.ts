import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  username: string;
  email: string;
  status: boolean;
};

type InitialState = {
  users: User[];
};
const initialState: InitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addNewUser } = usersSlice.actions;
