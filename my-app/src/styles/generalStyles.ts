import styled from "styled-components";
//#0c639d #0b5586 #094770 #07395a #052a43 #041c2d #020e16

const BreakPoints = {
  bpExtraLargeDevices: "1200px",
  bpLargeDevices: "992px",
  bgMediumDevices: "768px",
  bgSmallDevices: "600px",
};

const Colors = {
  primaryfontColor: "#daeffc",
  secundaryfontColor: "#b5def9",
  regularColor: "#0e71b3",
  firstBackground: "",
  secondBackround: "",
};

const Fonts = {
  primaryFont: "",
  secondaryFont: "",
};

export const Box = styled.div`
  padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #000000;
`;

export const GeneralStyles = styled.div`
  h1 {
  }
  h2 {
    margin-left: 1rem;
  }
`;

const Board = styled.div`
  width: 60vw;
  margin: auto;
  padding: 2rem;
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 2px solid #333;
  width: calc(100% - 4rem);
  margin: auto;
  padding: 1rem;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.25rem 1rem;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100% - 2rem);
  margin: auto;
`;
