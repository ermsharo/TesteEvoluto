import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { addNewUser } from "./../redux/features/user/userSlice";
import { User } from "./../types/index";
import styled from "styled-components";
import ErrorAlert from "./Error/ErrorAlert";

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function CreateUserForm() {
  const userList = useAppSelector((state) => state.user.users);
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  }

  const getNewId = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };

    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };

  const userDefaultObj = {
    ...formInputs,
    id: getNewId(),
    status: true,
  };

  const thisUsernameExist = (state: User[], username: string) => {
    let usernameExist = state.findIndex(
      (user: { username: string }) => user.username === username
    );
    if (usernameExist === -1) return false;
    return true;
  };

  const thisIdExist = (state: User[], id: string) => {
    let idExist = state.findIndex((user: { id: string }) => user.id === id);
    if (idExist === -1) return false;
    return true;
  };



  const thisEmailExist = (state: User[], email: string) => {
    let emailExist = state.findIndex(
      (user: { email: string }) => user.email === email
    );
    if (emailExist === -1) return false;
    return true;
  };

  const isMailValid = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const verifyErrors = (state: User[], user: User) => {
    const { email, username, id } = userDefaultObj;
    if (thisUsernameExist(state, username)) {
      alert("Nome de usuário já existe");
    }
    if (thisIdExist(state, id)) {
      alert("ID já existente");
    }
    if (thisEmailExist(state, email)) {
      alert("email já cadastrado");
    }
    if (!isMailValid(email)) {
      alert("email invalido");
    }
  };

  const subscribeUser = () => {
    console.log("user list", userList);
    console.log("user default object", userDefaultObj);
    verifyErrors(userList, userDefaultObj);
    dispatch(addNewUser(userDefaultObj));
  };

  return (
    <Box>
      <h2>Cadastrar usuario</h2>
      <FormBox>
        <Label>
          Nome
          <Input
            type="text"
            placeholder="Nome do usuário"
            name="username"
            onChange={handleChange}
            value={formInputs.username}
            required
          />
        </Label>

        <Label>
          Email
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Email do usuário"
            name="email"
            value={formInputs.email}
            required
          />
        </Label>

        <Button onClick={() => subscribeUser()}>Cadastrar</Button>
        <ErrorAlert errors = {formErrors}/>
      </FormBox>
    </Box>
  );
}
