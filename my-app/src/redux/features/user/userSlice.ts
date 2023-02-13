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

const changeUserStatus = (
  state: UserInitialState,
  id: string,
  status: boolean
) => {
  const updatedStatus = state.users.map((user) => {
    let userObj = user;
    if (userObj.id === id) {
      userObj.status = status;
      return userObj;
    }
    return userObj;
  });
  console.log("Array with status changed", updatedStatus);
  return updatedStatus;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = changeUserStatus(state, action.payload, false);
    },
    restoreUser: (state, action: PayloadAction<string>) => {
      state.users = changeUserStatus(state, action.payload, true);
    },
  },
});

export default usersSlice.reducer;
export const { addNewUser, removeUser, restoreUser } = usersSlice.actions;
