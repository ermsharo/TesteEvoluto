import styled from "styled-components";
import { User } from "../../types";

export const InfoBox = styled.div`
  padding: 1rem 2rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
`;

export default function RegularCard({ username, email, id }: User) {
  return (
    <>
      <th>{username}</th>
      <th>{email}asd</th>
      <th></th>
    </>
  );
}
