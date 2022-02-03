import React from 'react';
import styled from 'styled-components';


interface Props{
    component?:JSX.Element|JSX.Element[];
    style?:string;
}
export const Row :React.FC<Props>=({component,style}):JSX.Element=>{
    const Container = styled.div`
    width:80vw;
    height:fit-content;
    padding:25px;
    border-top-right-radius:8px;
    border-top-left-radius:8px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    justify-content:space-evenly;
    ${style}
`
    console.log(style+"HI")
   return(
        <Container>
            {component}      
        </Container>
    )
}