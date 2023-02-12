import styled from "styled-components";
import { Colors } from "../../styles/defaultProps";

const ErrorBox = styled.div`
  padding: 1rem;
  background-color: ${Colors.errorColor};
  color: ${Colors.primaryfontColor};
  border-radius: 1rem;
  text-align: left;
  font-size: 1rem;
`;

interface ErrorAlertProps {
  errors: string[];
}

export default function ErrorAlert({ errors }: ErrorAlertProps) {
  if (errors.length === 0) return null;
  return (
    <ErrorBox>
      <ul>
        {" "}
        {errors.map((error, index) => {
          return <li key={index}>{error}</li>;
        })}{" "}
      </ul>
    </ErrorBox>
  );
}
