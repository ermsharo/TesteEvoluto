import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { Box } from "./../styles/generalStyles";
import InfoCard from "./InfoCard/InfoCard";
import { Colors } from "../styles/defaultProps";

interface ContactListProps {
  status: boolean;
  title: string;
}

const TABLE = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  margin: 1rem;
`;

const TR = styled.tr`
  padding: 1rem;
  &:nth-child(odd) {
    background-color: ${Colors.thirthBackground};
  }
  color: ${Colors.secundaryfontColor};
`;
const TH = styled.th`
  padding: 0.5rem;
`;

export default function ContactList({ status, title }: ContactListProps) {
  const userList = useAppSelector((state) => state.user.users);
  return (
    <Box>
      <h2>{title}</h2>
      <TABLE>
        <tr>
          <TH>User</TH>
          <TH>Email</TH>
          <TH></TH>
        </tr>
        {userList.map((user, id) => {
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
    </Box>
  );
}
