export type User = {
  id: string;
  username: string;
  email: string;
  status: boolean;
};

export type UserInitialState = {
  users: User[];
};

export type FormInputs = {
  username: string;
  email: string;
};

export type EditIputs = {
  id: string;
  username: string;
  email: string;
};
