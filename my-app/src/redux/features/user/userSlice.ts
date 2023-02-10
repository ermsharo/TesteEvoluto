import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
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
    updateUsers: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
