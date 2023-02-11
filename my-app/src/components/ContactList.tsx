import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Box } from "./../styles/generalStyles";

interface ContactListProps {
  status: boolean;
  title: string;
}

export default function ContactList({ status, title }: ContactListProps) {
  const userList = useAppSelector((state) => state.user.users);
  return (
    <Box>
      <h2>{title}</h2>
      <div>{JSON.stringify(userList)}</div>
    </Box>
  );
}
