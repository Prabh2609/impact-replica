import React from 'react';
import styled from 'styled-components';

interface Props{
    heading:string;
    imageUrl?:string|undefined;
    content:string;
    style?:string;
    icon?:string;
}


const ContentContainer=styled.div`
    text-align:left;
`
const Icon = styled.i`
    width:20%;
    font-size:50px;
    color:#fff;
    padding-top:25px;
`
const Heading = styled.h3`
    margin-left:20px;
`
const Content = styled.p`
    margin-left:20px;
`
const Image = styled.img`
height:30%;
padding-top:25px;
`

export const Card:React.FC<Props>=({heading,imageUrl,content,style,icon}):JSX.Element=>{
    
    const CardContainer=styled.div`
    width:30%;
    display:flex;
    justify-content:space-evenly;
    ${style}
    `

    return(
        <CardContainer>
            {
                imageUrl?<Image src = {imageUrl}/>
                            :
                         <Icon className={icon}/>
            }
            
                <ContentContainer>
                    <Heading>
                        {heading}
                    </Heading>
                    <Content>
                        {content}
                    </Content>
                </ContentContainer>
        </CardContainer>
    )
}