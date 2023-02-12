import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { addNewUser } from "./../redux/features/user/userSlice";
import { User } from "./../types/index";
import styled from "styled-components";
import ErrorAlert from "./Error/ErrorAlert";
import {
  thisUsernameExist,
  thisIdExist,
  thisEmailExist,
  isMailValid,
} from "./../utils/formValidations";

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

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  }

  const generateNewID = () => {
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
    id: generateNewID(),
    status: true,
  };

  const verifyErrors = (state: User[], user: User) => {
    const { email, username, id } = userDefaultObj;
    let formErrors = [];
    if (username === "") {
      formErrors.push("Campo nome é obrigatorio");
    }

    if (thisUsernameExist(state, username)) {
      formErrors.push("Nome de usuário já existe");
    }

    if (thisEmailExist(state, email)) {
      formErrors.push("Email já cadastrado");
    }
    if (!isMailValid(email)) {
      formErrors.push("Email invalido");
    }

    setFormErrors(formErrors);
    if (formErrors.length === 0) dispatch(addNewUser(userDefaultObj));
  };

  const subscribeUser = () => {
    verifyErrors(userList, userDefaultObj);
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
        <ErrorAlert errors={formErrors} />
      </FormBox>
    </Box>
  );
}
