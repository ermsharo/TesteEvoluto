import { Input, Label, Box, Button } from "./../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function CreateUserForm() {
  //Props
  //type
  //name
  //value
  //handlechange
  //label
  return (
    <Box>
      <h2>Cadastrar usuario</h2>

      <Label>Nome</Label>
      <Input type="text" placeholder="Full name" required />
      <Label>Email</Label>
      <Input type="text" placeholder="Full name" required />

      <Button
        onClick={() => {
          console.log("-> testando");
        }}
      >
        asdasd
      </Button>
    </Box>
  );
}
