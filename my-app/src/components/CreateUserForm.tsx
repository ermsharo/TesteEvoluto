import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { updateUsers } from "./../redux/features/user/userSlice";

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
    return 0;
  };
  const generateStatus = () => {
    return true;
  };

  const userDefaultObj = {
    ...formInputs,
    id: getNewId(),
    status: generateStatus(),
  };

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

      <Button onClick={() => dispatch(updateUsers(userDefaultObj))}>asdasd</Button>
    </Box>
  );
}
