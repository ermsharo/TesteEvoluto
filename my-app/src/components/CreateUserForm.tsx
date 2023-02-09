import { Input, Label, Box, Button } from "./../styles/generalStyles";

export default function CreateUserForm() {
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
