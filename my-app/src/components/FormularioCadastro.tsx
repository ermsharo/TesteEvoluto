import styled from "styled-components";
import { Input, Label, Box } from "./../styles/generalStyles";

export default function FormularioCadastro() {
  return (
    <Box>
      <h2>Cadastrar usuario</h2>
      <Label>Nome</Label>
      <Input type="text" placeholder="Full name" required />
      <Label>Email</Label>
      <Input type="text" placeholder="Full name" required />

      <button
        onClick={() => {
          console.log("-> testando");
        }}
      >
        asdasd
      </button>
    </Box>
  );
}
