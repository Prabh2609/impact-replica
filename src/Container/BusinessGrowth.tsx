import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../Component/Button';

const Container = styled.div`
    height:95vh;
    display:flex;
    box-sizing:border-box;
    justify-content:space-evenly;
    padding:50px;
    padding-top:13%;
    padding-bottom:20px;
`
const ImageContainer=styled.div`
    width:50%;
`
const Heading = styled.h2`
    text-align:left;
    font-weight:bold;
`
const ContentContainer = styled.div`
    width:30%;
    text-align:left;
`
const Content = styled.p`
    text-align:left;
`
const Image = styled.img`
    width:100%;
`

export const BusinessGrowth:React.FC=():JSX.Element=>{
    return(
        <Container>
            <ContentContainer>
                <Heading>
                    Why Growing Your Business is Important
                </Heading>
                <Content>
                Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae
                vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex
                nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?
                </Content>
                <ActionButton content='Learn More' hover={false}/>
            </ContentContainer>
            <ImageContainer>
                <Image src = 'https://untree.co/demos/impact/images/illustration-1.jpg'/>
            </ImageContainer>
        </Container>    
    )
}