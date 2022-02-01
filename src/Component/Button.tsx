import React from 'react';
import styled from 'styled-components';

interface Props {
    content:string;
    hover:boolean;
    variant?:string;
}

const LinkButton = styled.button`
    background-color:transparent;
    color:#f85a40;
    border:none;
    margin-top:0px;
    margin-left:5%;
    cursor:pointer;
    position:relative;
    &::after{
        content:'\\fe65';
        position:absolute;
        font-size:20px;
        top:-3px;
        color:#f85a40;
    }
`

export const ActionButton:React.FC<Props>=({content,hover,variant}):JSX.Element=>{
    const Button = styled.button`
        background-color:#f85a40;
        border:2px solid #f85a40;
        color:white;
        padding:12px 30px;
        border-radius:4px;
        cursor:pointer;
        margin-top:20px;
        font-family:"Open Sans", sans-serif;
        line-height:1.5;
        font-weight:400;
        
        ${hover?
            '&:hover{background-color:transparent;border:2px solid white;}'
            :
            null        
        }
        
    `
    return(
        variant == 'Link'?<LinkButton>{content}</LinkButton>:<Button>{content}</Button>      
    )
}