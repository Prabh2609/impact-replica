import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Container = styled.div`
    background-color:#fafafa;
    width:100%;
    height:70vh;
    padding-top:10%;
`

const CarouselContainer = styled.div`
    height:80%;

    width:100%;
    display:flex;
    padding-left:30px;
    padding-right:30px;
    box-sizing:border-box;
    justify-content:space-between;
`
const Icon = styled.i`
    height:100%;
    cursor:pointer;
    padding-top:8%;
    font-size:24px;
    box-sizing:border-box;
    
`

const Image = styled.img`
    width:90px;
    height:90px;
    border-radius:50%;
    border:7px solid #fff;
`
const Name = styled.h3`
`
const Designation = styled.span`
    opacity:0.5;
`
const Feedback = styled.p`
`
const SliderContainer = styled.div`
    box-sizing:border-box;
    overflow:hidden;
    width:80%;
`
const Slider = keyframes`
    0%{left:0px;}
    10%{left:0px;}
    15%{left:-100%;}
    25%{left:-100%;}
`

const Items = styled.div`
    position:relative;
    width:240%;
    animation: ${Slider};
    animation-duration: 30s;
    animation-iteration-count: infinite;
    background-color:blue;
`
const Item = styled.div`
    background-color:yellow;
    width:80vw;
    height:100%;
    float:left;

`

export const Carousel:React.FC=():JSX.Element=>{
    return(
        <Container>
            <CarouselContainer>
                <Icon className='fas fa-chevron-left'/>
                    <SliderContainer>
                        <Items>
                            <Item>
                                <Image src = 'https://untree.co/demos/impact/images/person_1.jpg'/>
                                <Name>Maria Jones</Name>
                                <Designation>Customer</Designation>
                                                 
                            </Item>
                            <Item style={{backgroundColor:'red'}}>
                                <Image src = 'https://untree.co/demos/impact/images/person_1.jpg'/>
                                <Name>Maria Jones</Name>
                                <Designation>Customer</Designation>
                                                 
                            </Item>
                        </Items>
                    </SliderContainer>
                <Icon className='fas fa-chevron-right'/>
            </CarouselContainer>
        </Container>
    )
}