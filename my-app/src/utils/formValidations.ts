import { User } from "../types";

export const thisUsernameExist = (state: User[], username: string) => {
  let usernameExist = state.findIndex(
    (user: { username: string }) => user.username === username
  );
  if (usernameExist === -1) return false;
  return true;
};

export const thisIdExist = (state: User[], id: string) => {
  let idExist = state.findIndex((user: { id: string }) => user.id === id);
  if (idExist === -1) return false;
  return true;
};
export const thisEmailExist = (state: User[], email: string) => {
  let emailExist = state.findIndex(
    (user: { email: string }) => user.email === email
  );
  if (emailExist === -1) return false;
  return true;
};

export const isMailValid = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
