import React from 'react';
import styled from 'styled-components';
import { Card } from '../Component/Card';
import { Row } from '../Component/Row';

const Container = styled.div`
    width:100%;
    padding:50px;
    height:100vh;
    box-sizing:border-box;
    margin-bottom:10vh;
`
const Heading = styled.h3`
font-size:30px;
font-weight:bold;
font-family:"Montserrat", sans-serif;
line-height:1.2;
`
const Description = styled.p`
    font-family:"Open Sans",sans-serif;
    line-height:1.8;
    font-size:14px;
    width:50%;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
`
const cardStyle=`   
    display:block;
    height:max-content;
    background-color:#fff;
    border-radius:8px;
    margin-bottom:20px;
`
const imageStyle=`
    height:50%;
    width:-webkit-fill-available;
    padding-top:0px;
    border-radius:8px;
    margin-left:5%;
`
export const Blogs:React.FC=():JSX.Element=>{
    return(
        <Container>
            <Heading>
                Blog Posts
            </Heading>
            <Description>
                Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </Description>
            <Row
                style='height:60vh;'
                component={[
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`} 
                        imageUrl='https://untree.co/demos/impact/images/post_2.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='May 27, 2021 • 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                    style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_3.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='May 27, 2021 • 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                    style={`${cardStyle} & img{${imageStyle}}`} 
                        imageUrl='https://untree.co/demos/impact/images/post_4.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='May 27, 2021 • 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />
                ]}
            />
        </Container>
    )
}