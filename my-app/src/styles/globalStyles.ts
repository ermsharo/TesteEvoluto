import { createGlobalStyle } from "styled-components";
import { Colors } from "./defaultProps";
import { Fonts } from "./defaultProps";

const GlobalStyle = createGlobalStyle`
   

   body{
      background-color: ${Colors.firstBackground};
      color:${Colors.primaryfontColor};  
      font-family: ${Fonts.secondaryFont};
      border:0;
      margin:0;
   }
   h1 {
    font-family: ${Fonts.primaryFont}   
    font-weight: bold;
    font-size:2rem;
    padding:1.5rem;
  }
  h2 {
    font-size:2rem;
    font-weight: bold;
    font-family: ${Fonts.primaryFont};
    text-transform: capitalize;
    padding:1rem;
  }

`;
export default GlobalStyle;
