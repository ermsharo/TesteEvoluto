import styled from "styled-components";
import { User } from "../../types";

export const TH = styled.th`
  padding: 0.5rem;
`;

export default function RegularCard({ username, email, id }: User) {

  return (
    <>
      <TH>{username}</TH>
      <TH>{email}</TH>
      <TH></TH>
    </>
  );
}
