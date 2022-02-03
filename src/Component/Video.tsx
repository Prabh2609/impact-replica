import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from './Button';
import { Dialog } from './Dialog';

const Container = styled.div`
    height:100vh;
    display:flex;
    padding:60px;
    padding-top:7%;
    position:relative;
    box-sizing:border-box;
    justify-content:space-evenly;
    @media (max-width:768px){
        flex-direction:column-reverse;
        height:max-content;
    }
`
const VideoContainer=styled.div`
    width:50%;
    height:90%;
    position:relative;
    @media (max-width:768px){
        width:100%;
    }
`
const Content = styled.div`
    width:30%;
    height:80%;
    padding-top:20px;
    text-align:left;
    @media (max-width:768px){
        width:100%;
        margin-bottom:25px;
    }
`
const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:4px;
`
const Backdrop = styled.div`
    background-color:rgba(0,0,0,0.4);
    width:100%;
    height:100%;
    position:absolute;
    border-radius:4px;
    top:0px;
`
const Icon=styled.i`
    background-color:red;
    width:80px;
    height:80px;
    padding-top:28px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius:50%;
    background-color:#fff;
    cursor:pointer;
    box-sizing:border-box;
`
const ContentHeading=styled.h2`
    font-weight:bold;
    font-size:28px;
`
const Description = styled.p`
    font-size:14px;
    font-family:"Open Sans", sans-serif;
    line-height:1.8;
    font-weight:400;
`
const List = styled.ul`
    list-style:none;
    
`
const ListItem = styled.li`
    font-size:14px;
    font-weight:400;
    font-family:"Open Sans", sans-serif;
    font-weight:400;
    line-height:1.8;
    color:#212529;
    position:relative;
    padding-left:30px;
    &::before{
        content:'\\2714';
        position:absolute;
        font-size:20px;
        left:0px;
        top:1px;
        color:#f85a40;
    }
`



export const VideoSection:React.FC=():JSX.Element=>{
    const [open,setOpen] = useState(false)
    
    const onClose = ():void=>{
        
        setOpen(false)
    }
    
    return(
        <Container>
            
            <VideoContainer>
                
                <Image src = 'https://untree.co/demos/impact/images/hero-min.jpg'/>
                <Backdrop />
                <Icon className='fas fa-play' onClick={()=>setOpen(true)}/>
                
                
            </VideoContainer>
            <Content>
                <ContentHeading >
                    Get Started With Impact
                </ContentHeading>
                <Description>
                    Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae
                </Description>
                <List>
                    <ListItem>
                        Deserunt harum incidun
                    </ListItem>
                    <ListItem>
                        Ex nesciunt est temporibus ipsum
                    </ListItem>
                    <ListItem>
                        Vel rem eveniet facere et velit sunt
                    </ListItem>
                    <ListItem>
                        Aspernatur eaque quis
                    </ListItem>
                    <ListItem>
                        Dolorem magnam quisquam? Facere
                    </ListItem>
                </List>
                <ActionButton content='Learn More' hover={false}/>
            </Content>
            {
                open?<Dialog onClose={onClose}/>:null
            }
            
        </Container>
    )
}