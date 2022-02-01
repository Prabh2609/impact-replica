import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    height:65vh;
    background-color:#000;
    width:100%;
`
const ItemContainer=styled.div`
    display:flex;
    width:100%;
    height:80%;
    justify-content:space-evenly;
    box-sizing:border-box;
    padding:80px;
`
const Item=styled.div`
    text-align:left;
    min-width:15vw;
    width:fit-content;
`
const Credit = styled.div`

`
const Heading = styled.h3`
    color:#fff;
    width:fit-content;
    text-align:left;
`
const Content = styled.p`
    color:#63767a;
    max-width:25vw;
`
const List = styled.ul`
    color:#fff;
    text-align:left;
    list-style:none;
    display:flex;
    padding-left:0px;
`
const ListItem = styled.li`
    margin:5px;
    cursor:pointer;
`
const Icon = styled.i`
    background-color:#f85a40;
    padding:5px;
    border-radius:50%;
`

export const Footer:React.FC=():JSX.Element=>{
    return (
        <Container>
            <ItemContainer>
                <Item>
                    <Heading>
                        About Impact   
                    </Heading>
                    <Content>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Content>
                    <List>
                        <ListItem>
                            <Icon className='fab fa-instagram'/>
                        </ListItem>
                        <ListItem>
                            <Icon className='fab fa-twitter'/>
                        </ListItem>
                        <ListItem>
                            <Icon className='fab fa-facebook-f'/>
                        </ListItem>
                        <ListItem>
                            <Icon className='fab fa-linkedin-in'/>
                        </ListItem>
                        <ListItem>
                            <Icon className='fab fa-pinterest'/>
                        </ListItem>
                        <ListItem>
                            <Icon className='fab fa-dribbble'/>
                        </ListItem>
                    </List>
                </Item>
                 <Item>
                    <Heading>
                        Links
                    </Heading>
                    <List style={{flexDirection:'column',color:'#63767a'}}>
                        <ListItem>
                            About Us
                        </ListItem>
                        <ListItem>
                            Services
                        </ListItem>
                        <ListItem>
                            News
                        </ListItem>
                        <ListItem>
                            Careers
                        </ListItem>
                        <ListItem>
                            Contact
                        </ListItem>
                    </List>      
                </Item>
                <Item>
                    <Heading>
                        Company 
                    </Heading>
                    <List style={{flexDirection:'column',color:'#63767a'}}>
                        <ListItem>
                            About Us
                        </ListItem>
                        <ListItem>
                            Services
                        </ListItem>
                        <ListItem>
                            News
                        </ListItem>
                        <ListItem>
                            Careers
                        </ListItem>
                        <ListItem>
                            Contact
                        </ListItem>
                    </List>      
                </Item>
                <Item>
                    <Heading>
                        Contact  
                    </Heading>
                    <Content>43 Raymouth Rd. Baltemoer, London 3910</Content>
                    <List style={{flexDirection:'column',color:'#63767a'}}>
                        <ListItem>+1(123)-456-7890</ListItem>
                        <ListItem>+1(123)-456-7890</ListItem>
                        <ListItem>info@mydomain.com</ListItem>
                    </List>
                </Item>
            </ItemContainer>
        </Container>
    )
}