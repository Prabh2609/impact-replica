import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props{
    imageUrl:string;
    name:string;
    designation:string;
    feedback:string;
    nextAnimate:boolean;
    prevAnimate:boolean;
}

const mymove=keyframes`
from {left: 50%;opacity:0;}
to {left: 0%;opacity:1;}
`
const prev = keyframes`
    from{right:50%;opacity:0;}
    to{right:0%;opacity:1;}
    
`
const Image = styled.img`
width:90px;
height:90px;
border-radius:50%;
border:7px solid #fff;
box-shadow:0 15px 30px 0 rgb(0 0 0 / 10%);
`

const Name = styled.h3`

`
const Designation = styled.span`
    opacity:0.5;
`
const Feedback = styled.p`
    font-family:'Georgia', serif;
    font-style:italic;
    font-size:20px;
    text-align:center;
    line-height:1.8;
`



export const ReviewSection:React.FC<Props>=({imageUrl,name,designation,feedback,nextAnimate,prevAnimate}):JSX.Element=>{
    
    const Container = styled.div`
    width:50%;
    position:relative;
    ${nextAnimate?css`animation:${mymove} 1s linear;`:null}
    ${prevAnimate?css`animation:${prev} 1s linear;`:null}
    @media (max-width:768px){
        width:100%;
        margin-top:20px;
        margin-bottom:20px;
    }
`    

    return(
        <Container>
            <Image src={imageUrl}/>
            <Name>
                {name}
            </Name>
            <Designation>
                {designation}
            </Designation>
            <Feedback>
                {feedback}
            </Feedback>
        </Container>
    )
}