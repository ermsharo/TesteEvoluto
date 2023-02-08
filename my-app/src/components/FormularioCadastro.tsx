import styled from "styled-components";

const Box = styled.div`
  padding: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function FormularioCadastro() {
  return (
    <Box>
      <h2>Cadastrar usuario</h2>

      <input type="text" value="asd"></input>
      <input type="text" value="asd"></input>
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
