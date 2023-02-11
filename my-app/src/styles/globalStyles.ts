import { createGlobalStyle } from "styled-components";
import { Colors } from "./defaultProps";
import { Fonts } from "./defaultProps";

const GlobalStyle = createGlobalStyle`
   

   body{
      font-family: 'Arial';
      background-color: ${Colors.firstBackground};
      color:${Colors.primaryfontColor};  
      font-family: ${Fonts.secondaryFont}      
   }
   h1 {
    font-family: ${Fonts.primaryFont}   
  }
  h2 {

    font-family: ${Fonts.primaryFont} 
  }


`;
export default GlobalStyle;
