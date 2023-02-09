import CreateUserForm from "./components/CreateUserForm";
import ContactList from "./components/ContactList";
import styled from "styled-components";
import { GeneralStyles } from "./styles/generalStyles";

const Board = styled.div`
  width: 70vw;
  margin: auto;
  padding: 2rem;
  // trunk-ignore(git-diff-check/error)
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

function App() {
  return (
    <GeneralStyles>
      <Board>
        <CreateUserForm />
        <ContactList title="usuarios criados" flag="users" />
        <ContactList title="usuarios deletados" flag="deleted_users" />
      </Board>
    </GeneralStyles>
  );
}

export default App;
