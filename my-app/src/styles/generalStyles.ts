import styled from "styled-components";

const bpExtraLargeDevices = "1200px";
const bpLargeDevices = "992px";
const bgMediumDevices = "768px";
const bgSmallDevices = "600px";

export const Box = styled.div`
  padding: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GeneralStyles = styled.div`
  h1 {
  }
  h2 {
    margin-left: 2rem;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 16px;
    padding: 8px;
    background-color: darkblue;
    color: white;
  }
`;

const Board = styled.div`
  width: 60vw;
  margin: auto;
  padding: 32px;
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 2px solid #333;
  width: calc(90% - 32px);
  margin: auto;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
`;
