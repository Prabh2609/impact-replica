import React from 'react';
import styled from 'styled-components';

interface Props {
    content:string;
    hover:boolean;
}


export const ActionButton:React.FC<Props>=({content,hover}):JSX.Element=>{
    const Button = styled.button`
    background-color:#f85a40;
    border:2px solid #f85a40;
    color:white;
    padding:12px 30px;
    border-radius:4px;
    cursor:pointer;
    margin-top:10%;
    ${hover?
        '&:hover{background-color:transparent;border:2px solid white;}'
        :
        null        
    }
    `
    return(
        <Button>
            {content}
        </Button>
    )
}