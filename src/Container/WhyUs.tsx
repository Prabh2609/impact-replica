import React from 'react';
import styled from 'styled-components';
import { Card } from '../Component/Card';
// import AboutUs from '../assets/AboutUs.png' 

const Container = styled.div`
    height:100vh;
    background-color:#fafafa;
    display:flex;
    padding:60px;
    box-sizing:border-box;
    justify-content:space-evenly;
    @media (max-width:768px){
        flex-direction:column;
        height:150vh;
    }
    @media (max-width:426px){
        padding-left:8px;
        padding-right:8px;
    }
`
const Content=styled.div`
    width:40%;
    @media(max-width:768px){
        width:100%;
    }
    
`
const ImageContainer = styled.div`
    width:45%;
    height:80%;
    margin-top:20px;
    @media(max-width:768px){
        width:100%;
        height:auto;
    }
`
const ContentHeading = styled.h2`
    text-align:left;
    font-size:30px;
    font-weight:bold;
`
const ItemContainer = styled.div`
    justify-content:space-around
    width:100%;
    height:30%;
    display:flex;
    @media (max-width:426px){
        height:40%;
    }
`
const Icon = styled.div`
    height:30%;
    padding-top:25px;
`
const ItemContent = styled.p`
    text-align:left;
    font-family:"Open Sans", sans-serif;
    font-size:14px;
    line-height:1.8;
    font-weight:400;
`
const ItemHeading = styled.h3`
    text-align:left;
    line-height:1.2;
    font-family:"Montserrat", sans-serif;
    font-size:18px;
    font-weight:bold;
`
const ItemContentContainer = styled.div`
    width:80%;
    height:100%;
    margin-left:25px;
`
const Image = styled.img`
    width:100%;
    height:100%;
`
export const WhyUs:React.FC=():JSX.Element=>{
    return(
        <Container>
            <Content>
                <ContentHeading>Why You Should Choose Us</ContentHeading>
                
                <ItemContainer>
                    <Icon>
                        <Image src='https://untree.co/demos/impact/images/svg/24-hours-support.svg'/>
                    </Icon>
                    
                    <ItemContentContainer>
                        <ItemHeading>Professional</ItemHeading>
                        <ItemContent>
                            Sapiente, assumenda suscipit autem ab expedita dignissimos,
                            corrupti iusto nobis ex aperiam cumque reprehenderit,
                            saepe culpa qui eos ullam minima quo, consequuntur.
                        </ItemContent>
                    </ItemContentContainer>
                </ItemContainer>
                 <ItemContainer> 
                    <Icon>
                        <Image src='https://untree.co/demos/impact/images/svg/good-review.svg'/>
                    </Icon>
                    
                    <ItemContentContainer>
                        <ItemHeading>Good Review</ItemHeading>
                        <ItemContent>
                            Sapiente, assumenda suscipit autem ab expedita dignissimos,
                            corrupti iusto nobis ex aperiam cumque reprehenderit,
                            saepe culpa qui eos ullam minima quo, consequuntur.
                        </ItemContent>
                    </ItemContentContainer>
                </ItemContainer>
            </Content>
            <ImageContainer>
                <Image src='https://untree.co/demos/impact/images/about-us-min.png'/>               
            </ImageContainer>
        </Container>
    )
}