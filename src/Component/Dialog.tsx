import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props{
    onClose:ReactNode
}

const Backdrop = styled.div`
    width:100%;
    height:100vh;
    position:absolute;
    background-color:rgba(0,0,0,0.8);
    top:0px;
`
const Video = styled.iframe`
    width:55%;
    height:60%;
    opacity:1;
    margin-top:5%;
`
const Header = styled.header`
    width:100%;
    height:10vh;
`
const Icon = styled.i`
    color:#fff;
    height:100%;
    font-size:48px;
    float:right;
    margin-right:30px;
    padding-top:20px;
    cursor:pointer;
`
export const Dialog:React.FC<Props>=(onClose):JSX.Element=>{
    return(
        <Backdrop>
            <Header>
                <Icon className='fas fa-times' onClick={()=>onClose}/>
            </Header>
            <Video  src="https://www.youtube.com/embed/KI2lsdXJQ40" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </Backdrop>
    )
}