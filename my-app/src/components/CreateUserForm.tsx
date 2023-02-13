import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { addNewUser } from "./../redux/features/user/userSlice";
import { User, FormInputs } from "./../types/index";
import styled from "styled-components";
import ErrorAlert from "./Error/ErrorAlert";
import {
  thisUsernameExist,
  thisIdExist,
  thisEmailExist,
  isMailValid,
} from "./../utils/formValidations";
import { generateNewID } from "./../utils/userListUtils";

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function CreateUserForm() {
  const userList = useAppSelector((state) => state.user.users);
  const [formInputs, setFormInputs] = useState<FormInputs>({
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

  const verifyErrors = (state: User[], formInputs: FormInputs) => {
    const { email, username } = formInputs;
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

    if (formErrors.length === 0) {
      let id = generateNewID();
      while (thisIdExist(state, id)) {
        id = generateNewID();
      }
      const userDefaultObj = {
        ...formInputs,
        id: id,
        status: true,
      };
      dispatch(addNewUser(userDefaultObj));
    }
  };

  const subscribeUser = () => {
    verifyErrors(userList, formInputs);
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
