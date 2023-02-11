import CreateUserForm from "./components/CreateUserForm";
import ContactList from "./components/ContactList";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";

const Board = styled.div`
  width: 70vw;
  margin: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Board>
        <CreateUserForm />
        <ContactList title="contatos ativos" status />
        <ContactList title="contatos excluídos" status={false} />
      </Board>
    </>
  );
}

export default App;
