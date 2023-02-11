export type User = {
  id: string;
  username: string;
  email: string;
  status: boolean;
};

export type UserInitialState = {
  users: User[];
};
