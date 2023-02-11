import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState } from "./../../../types/index";
type User = {
  id: string;
  username: string;
  email: string;
  status: boolean;
};

const initialState: UserInitialState = {
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
