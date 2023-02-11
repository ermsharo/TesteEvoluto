import styled from "styled-components";
import { Colors } from "../../styles/defaultProps";

export const HeaderBox = styled.header`
  background-color: ${Colors.regularColor};
  padding: 1rem 2rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
`;

export default function Header() {
  return <HeaderBox>Teste evoluto</HeaderBox>;
}
