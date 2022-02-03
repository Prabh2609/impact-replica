import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom'

interface Props{
    onClose():void;
}

const Backdrop = styled.div`
    width:100%;
    height:100vh;
    position:fixed;
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
    font-size:36px;
    float:right;
    margin-right:30px;
    padding-top:20px;
    cursor:pointer;
`

const rootDiv = document.getElementById('portal')!
export const Dialog:React.FC<Props>=({onClose}):JSX.Element=>{

    return ReactDOM.createPortal(
        <Backdrop>
            <Header>
                
                <Icon className='fas fa-times' onClick={()=>onClose()}/>
                
            </Header>
            <Video  src="https://www.youtube.com/embed/KI2lsdXJQ40?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </Backdrop>,
        rootDiv
    );
}