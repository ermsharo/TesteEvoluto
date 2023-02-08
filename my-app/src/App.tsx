import FormularioCadastro from "./components/FormularioCadastro";
import ContactList from "./components/ContactList";
import styled from "styled-components";

const GeneralStyles = styled.div`
  h1 {
  }
  h2 {
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 16px;
    padding: 8px;
    background-color: darkblue;
    color: white;
  }
`;

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
