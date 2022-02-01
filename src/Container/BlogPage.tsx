import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../Component/Button';
import { Card } from '../Component/Card';
import {Row} from '../Component/Row'

const Container = styled.main`
    background-color:#fafafa;
    padding-bottom:80px;
`
const Landing = styled.div`
    background-color:#008374;
    height:40vh;
    width:100%;
    margin-bottom:30px;
`
const MainHeading = styled.h1`
    color:white;
    margin:0px;
    font-weight:bold;
    font-family:"Montserrat",sans-serif;
`
const Description = styled.p`
    color:rgba(255, 255, 255, 0.8);
    font-size:16px;
    font-family:"Open Sans", sans-serif;
    line-height:1.8;
`
const List=styled.ul`
    display:flex;
    list-style:none;
    margin-bottom:25px;
    justify-content:center;
`
const ListItem=styled.li`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:rgba(248, 90, 64, 0.1);
    color:#f85a40;
    line-height:40px;
    text-align:center;
    margin-left:8px;
    cursor:pointer;
    &:hover{
        background-color:#f85a40;
        color:#fff;
    }
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


export const BlogPage:React.FC=():JSX.Element=>{
    return(
        <Container>
            <Landing>
                <MainHeading>
                    Blog
                </MainHeading>
                <Description>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti<br/>
                    iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam<br/>
                    minima quo, consequuntur.
                </Description>
                <ActionButton content='Get In Touch' hover={true}/>
            </Landing>
            <Row
                
                component={[
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`} 
                        imageUrl='https://untree.co/demos/impact/images/post_2.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_3.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_4.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_5.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_6.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & img{${imageStyle}}`}  
                        imageUrl='https://untree.co/demos/impact/images/post_2.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />
                ]}
            />
            <List>
                <ListItem>1</ListItem>
                <ListItem style={{backgroundColor:'#f85a40',color:'#fff'}}>2</ListItem>
                <ListItem>3</ListItem>
                <ListItem>4</ListItem>
                <ListItem>5</ListItem>
            </List>
        </Container>
    )
}