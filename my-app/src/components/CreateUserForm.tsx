import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { addNewUser } from "./../redux/features/user/userSlice";
import { User } from "./../types/index";

export default function CreateUserForm() {
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
  });

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
    console.log("aqui esta", formInputs);
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
  const generateStatus = () => {
    return true;
  };

  const userDefaultObj = {
    ...formInputs,
    id: getNewId(),
    status: generateStatus(),
  };

  const isUsernameValid = (state: User[], username: string) => {};

  const isIdValid = (state: User[], id: string) => {};

  const isMailValid = (state: User[], mail: string) => {};

  const verifyErrors = (state: User[], mail: string) => {};

  return (
    <Box>
      <h2>Cadastrar usuario</h2>

      <Label>Nome</Label>
      <Input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
        value={formInputs.username}
        required
      />
      <Label>Email</Label>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="email"
        name="email"
        value={formInputs.email}
        required
      />

      <Button onClick={() => dispatch(addNewUser(userDefaultObj))}>
        asdasd
      </Button>
    </Box>
  );
}
