import axios from "axios";
import { generateNewID } from "../utils/userListUtils";

const toUserObj = (dataResponse: any) => {
  let userList = dataResponse.map((RequestUsers: any) => {
    return {
      username: `${RequestUsers.username}`,
      email: `${RequestUsers.email}`,
      id: generateNewID(),
      status: true,
    };
  });
};

export const getData = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );

  let mockedUserList = toUserObj(response.data);
  console.log(mockedUserList);
  return [];
};
