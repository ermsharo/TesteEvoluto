import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const Box = styled.div`
  padding: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface ContactListProps {
  flag?: string;
  title?: string;
}

export default function ContactList({ flag, title }: ContactListProps) {
  const userList = useAppSelector((state) => state.user.users);
  return (
    <Box>
      <h2>Usuarios excluidos</h2>
      <div>{JSON.stringify(userList)}</div>
    </Box>
  );
}
