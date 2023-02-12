import styled from "styled-components";
import { Colors } from "../../styles/defaultProps";

const ErrorBox = styled.div`
padding: 1.5rem; 
background-color: ${Colors.errorColor}; 
color: ${Colors.primaryfontColor}; 
border-radius:1rem; 
text-align:left; 

`;

interface ErrorAlertProps {
  errors: string[];
}


export default function ErrorAlert({errors} : ErrorAlertProps) {
 
  if(errors.length === 0 ) return null;
  return (
    <ErrorBox>
      {errors.map((error, index)=>{
        return(<>aaaa</>)
      })}      
      </ErrorBox>
  );
}
