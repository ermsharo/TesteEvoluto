import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { User } from "../types";
import {
  isMailValid,
  thisEmailExist,
  thisIdExist,
  thisUsernameExist,
} from "../utils/formValidations";
import { generateNewID } from "../utils/userListUtils";
import { addNewUser } from "./../redux/features/user/userSlice";

export const RequestUsers = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const userList = useAppSelector((state) => state.user.users);

  const verifyErrors = (username: string, email: string) => {
    let formErrors = [];
    if (username === "") {
      formErrors.push("Campo nome é obrigatorio");
    }

    if (thisUsernameExist(userList, username)) {
      formErrors.push("Nome de usuário já existe");
    }

    if (thisEmailExist(userList, email)) {
      formErrors.push("Email já cadastrado");
    }
    if (!isMailValid(email)) {
      formErrors.push("Email invalido");
    }

    if (formErrors.length === 0) {
      let id = generateNewID();
      while (thisIdExist(userList, id)) {
        id = generateNewID();
      }
      const userDefaultObj = {
        username: `${username}`,
        email: `${email}`,
        id: id,
        status: true,
      };
      dispatch(addNewUser(userDefaultObj));
    }
  };

  const sendUser = (item: any, index: number) => {

    const userDefaultObj = {
      id: generateNewID(),
      username: `${item.name}`,
      email: `${item.email}`,
      status: true,
    };
    dispatch(addNewUser(userDefaultObj));
  };

  const runUserData = (data: any) => {
    data.forEach(sendUser);
  };

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(response.data);
      runUserData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error with Message: " + error.message);
        setError(true);
        console.error("Não foi possível requisitar os usuarios mockados");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading] as const;
};
