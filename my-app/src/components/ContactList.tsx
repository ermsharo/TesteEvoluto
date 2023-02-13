import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { Box } from "./../styles/generalStyles";
import InfoCard from "./InfoCard/InfoCard";
import { Colors } from "../styles/defaultProps";

interface ContactListProps {
  status: boolean;
  title: string;
}

const DisplayInfoBox = styled.div`
  padding: 1rem;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  border-radius: 1rem;
  text-align: center;
  font-size: 1rem;
`;

const IconList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

const TABLE = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;

  width: 100%;
`;

const TR = styled.tr`
  padding: 1rem;
  &:nth-child(odd) {
    background-color: ${Colors.thirthBackground};
    input {
      background-color: ${Colors.secondBackround};
    }
  }
  color: ${Colors.secundaryfontColor};
`;
const TH = styled.th`
  padding: 0.5rem;
`;

export default function ContactList({ status, title }: ContactListProps) {
  const userList = useAppSelector((state) => state.user.users);

  const filterByParameter = () => {
    const filterByStatus = userList.filter((user) => {
      return user.status === status;
    });

    return filterByStatus;
  };

  return (
    <Box>
      <h2>{title}</h2>
      {filterByParameter().length === 0 ? (
        <DisplayInfoBox>Sem informações para exibir </DisplayInfoBox>
      ) : (
        <TABLE>
          <tr>
            <TH>Nome</TH>
            <TH>Email</TH>
            <TH></TH>
          </tr>
          {filterByParameter().map((user, id) => {
            return (
              <TR key={id}>
                <InfoCard
                  id={user.id}
                  username={user.username}
                  status={user.status}
                  email={user.email}
                />
              </TR>
            );
          })}
        </TABLE>
      )}
    </Box>
  );
}
