import CreateUserForm from "./components/CreateUserForm";
import ContactList from "./components/ContactList";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header/Header";
import { Colors } from "./styles/defaultProps";
import { useState } from "react";
const Board = styled.div`
  width: 70vw;
  margin: auto;
  padding: 2rem;
`;

const TabsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tabs = styled.div`
  border-radius: 1rem 1rem 0rem 0rem;
  background-color: ${Colors.secondBackround};
  padding: 1rem 2rem;
`;

const TabsArea = styled.div`
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
`;

export const TabsInfoArea = styled.div`
  padding: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 0rem 1rem 1rem 1rem;
  gap: 1rem;
  white-space: wrap;

  text-overflow: ellipsis;
  width: 100%;
  height: 100%;
  background-color: ${Colors.secondBackround};
`;

type tabTypes = {
  name: string;
  active: boolean;
};

function Tab({ name, active }: tabTypes) {
  let style = {
    opacity: active ? "1" : "0.5",
  };

  return <Tabs style={style}>{name}</Tabs>;
}

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  let TabsNames = [
    "Cadastrar Usuario",
    "Contatos Ativos",
    "Contatos Excluídos",
  ];

  const verifyTabIsActive = (name: string, tabIndex: number) => {
    if (TabsNames[tabIndex] === name) return true;
    return false;
  };

  let TitlesRender = [
    <CreateUserForm />,
    <ContactList title="contatos ativos" status />,
    <ContactList title="contatos excluídos" status={false} />,
  ];

  return (
    <>
      <GlobalStyle />
      <Header />

      <Board>
        <TabsBox>
          <TabsArea>
            {TabsNames.map((name, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setTabIndex(i);
                  }}
                >
                  <Tab name={name} active={verifyTabIsActive(name, tabIndex)} />
                </div>
              );
            })}
          </TabsArea>
          <TabsInfoArea>{TitlesRender[tabIndex]}</TabsInfoArea>
        </TabsBox>
      </Board>
    </>
  );
}

export default App;
