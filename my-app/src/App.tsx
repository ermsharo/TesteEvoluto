import CreateUserForm from "./components/CreateUserForm";
import ContactList from "./components/ContactList";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header/Header";

import { useState } from "react";
import {
  Board,
  Tabs,
  TabsArea,
  TabsBox,
  TabsInfoArea,
} from "./styles/generalStyles";

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
