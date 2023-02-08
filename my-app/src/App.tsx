import FormularioCadastro from "./components/FormularioCadastro";
import ContactList from "./components/ContactList";
import styled from "styled-components";
import { GeneralStyles } from "./styles/generalStyles";

const Board = styled.div`
  width: 60vw;
  margin: auto;
  padding: 32px;
`;

function App() {
  return (
    <GeneralStyles>
      <Board>
        <FormularioCadastro />
        <ContactList />
      </Board>
    </GeneralStyles>
  );
}

export default App;
