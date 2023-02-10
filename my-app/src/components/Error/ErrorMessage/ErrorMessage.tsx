
import styled from "styled-components";

export const ErrorBox = styled.div`
  padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
`;

interface ErrorMessageProps {
    message: string
}

function ErrorMessage({ message }: ErrorMessageProps) {
    return <ErrorBox>ErrorMessage : message</ErrorBox>;
};

export default ErrorMessage;
