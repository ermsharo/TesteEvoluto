import styled from "styled-components";
import { Fonts } from "./defaultProps";

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
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 1rem;

  gap: 1rem;
  white-space: wrap;

  text-overflow: ellipsis;
  height: 100%;
  background-color: ${Colors.secondBackround};
`;

export const Input = styled.input`
  font-family: ${Fonts.primaryFont}
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  &::placeholder {
    color: ${Colors.firstBackground};
  }
  &:focus{
    outline: 0.2rem solid  ${Colors.firstBackground};
    outline-style: dashed;
  }
`;

export const EditInput = styled.input`
  font-family: ${Fonts.primaryFont}
  color: #333;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;

  width: calc(100%);

  margin-top: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 16px;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  &::placeholder {
    color: ${Colors.firstBackground};
  }
  &:focus{
    outline: 0.2rem solid  ${Colors.firstBackground};
    outline-style: dashed;
  }
`;

export const Label = styled.label`
  font-family: ${Fonts.primaryFont};
  font-size: 1.2rem;
  line-height: 1.2rem;
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
  width: calc(100%);
  height: 3rem;
  margin: auto;
  background-color: ${Colors.regularColor};
  margin-bottom: 2rem;
  &:hover {
    background-color: ${Colors.hooverColor};
  }
`;
