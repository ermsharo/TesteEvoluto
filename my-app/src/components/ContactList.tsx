import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Box } from "./../styles/generalStyles";
import RegularCard from "../components/InfoCard/RegularCard";
import InfoCard from "./InfoCard/InfoCard";

interface ContactListProps {
  status: boolean;
  title: string;
}

export default function ContactList({ status, title }: ContactListProps) {
  const userList = useAppSelector((state) => state.user.users);
  return (
    <Box>
      <h2>{title}</h2>
      <table>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th></th>
        </tr>
        {userList.map((user, id) => {
          return (
            <tr key={id}>
              <InfoCard
                id={user.id}
                username={user.username}
                status={user.status}
                email={user.email}
              />
            </tr>
          );
        })}
      </table>
    </Box>
  );
}
