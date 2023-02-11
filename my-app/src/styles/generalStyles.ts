import styled from "styled-components";


const Colors = {
  primaryfontColor: "#daeffc",
  secundaryfontColor: "#b5def9",
  regularColor: "#0e71b3",
  hooverColor: "#1188d8",
  firstBackground: "#020e16",
  secondBackround: "#041c2d",
  thirthBackground: "#052a43",
};


export const Box = styled.div`
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${Colors.secondBackround};
`;




export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  width: calc(100% - 4rem);
  margin: auto;
  padding: 1rem;
  margin-bottom: 16px;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  &::placeholder {
    color: ${Colors.firstBackground};
  }
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
  height: 3rem;
  margin: auto;
  background-color: ${Colors.regularColor};
  margin-bottom: 2rem;
  &:hover {
    background-color: ${Colors.hooverColor};
  }
`;
