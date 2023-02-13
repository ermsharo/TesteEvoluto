import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState, User, EditIputs } from "./../../../types/index";

const initialState: UserInitialState = {
  users: [ ],
};

const orderByUsername = (userList: User[]) => {
  let orderUsers = userList.sort((a, b) => (a.username > b.username ? 1 : -1));
  return orderUsers;
};

const addUser = (state: UserInitialState, user: User) => {
  let newUserArr = state.users;
  newUserArr.push(user);
  return orderByUsername(newUserArr);
};

const changeUserinfo = (state: UserInitialState, editInputs: EditIputs) => {
  const updatedStatus = state.users.map((user) => {
    let userObj = user;
    if (userObj.id === editInputs.id) {
      userObj.username = editInputs.username;
      userObj.email = editInputs.email;
      return userObj;
    }
    return userObj;
  });
  return orderByUsername(updatedStatus);
};

const changeUserStatus = (
  state: UserInitialState,
  id: string,
  status: boolean
) => {

  const updatedStatus = state.users.map((user) => {

    let userObj = user;
    if (userObj.id === id) {
      console.log("outside id", id)
      console.log("username of ",user.username)
      userObj.status = status;
      return userObj;
    }
    return userObj;
  });
  return orderByUsername(updatedStatus);
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      state.users = addUser(state, action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = changeUserStatus(state, action.payload, false);
    },
    restoreUser: (state, action: PayloadAction<string>) => {
      state.users = changeUserStatus(state, action.payload, true);
    },
    editUser: (state, action: PayloadAction<EditIputs>) => {
      state.users = changeUserinfo(state, action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addNewUser, removeUser, restoreUser, editUser } =
  usersSlice.actions;
