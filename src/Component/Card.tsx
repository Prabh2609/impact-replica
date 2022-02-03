import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './Button';

interface Props{
    heading:string;
    imageUrl?:string|undefined;
    content:string;
    style?:string;
    icon?:string;
    metaData?:string;
    action?:string;
}


const ContentContainer=styled.div`
    text-align:left;
    
`
const Icon = styled.i`
    width:20%;
    font-size:50px;
    color:#fff;
    padding-top:25px;
    @media (max-width:768px){
        text-align:center;
    }
    @media (max-width:426px){
        font-size:36px;
        margin-left:12px;   
    }
`
const Heading = styled.h3`
    margin-left:20px;
    margin-top:10px;
    margin-bottom:10px;
`
const Content = styled.p`
    margin-left:20px;
    font-family:"Open Sans", sans-serif;
    line-height:1.8;
    font-weight:400;
    font-size:14px;
    color:#212529;
`
const Image = styled.img`
height:30%;
padding-top:25px;
`
const MetaData = styled.div`
    display:block;
    margin-left:5%;
    color:#7a7a7a;
    margin-top:10px;
`
const Data = styled.span`

`
export const Card:React.FC<Props>=({heading,imageUrl,content,style,icon,metaData,action}):JSX.Element=>{
    
    const CardContainer=styled.div`
    width:30%;
    display:flex;
    padding:8px;
    justify-content:space-evenly;
    text-align:left;
    
    @media (max-width:768px){
        width:100%;
        flex-direction:column;
    }
    @media (max-width:426px){
    }
    ${style}
    `

    return(
        <CardContainer>
            {
                imageUrl?<Image src = {imageUrl}/>
                            :
                         <Icon className={icon}/>
            }
            {
                metaData?
                <MetaData>
                    <Data>{metaData}</Data>
                </MetaData>
                :
                null
            }
            <ContentContainer>
                <Heading>
                    {heading}
                </Heading>
                <Content>
                    {content}
                </Content>
            </ContentContainer>
            {
                action?
                    <ActionButton content={action} hover={false} variant = 'Link'/>
                    :
                    null
            }
        </CardContainer>
    )
}