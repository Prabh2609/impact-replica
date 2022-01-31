import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './Button';

const MainSection = styled.div`
    width:100%;
    padding-top:10vh;
    height:73vh;
    margin-bottom:5vh;
    display:flex;
    justify-content:space-around;
`
const Content = styled.main`
    width:fit-content;
    padding-top:24px;
    text-align:center;
`
const MainHeading = styled.h1`
    color:white;
    font-weight:bold;
`
const Description = styled.p`
    color:rgba(255, 255, 255, 0.8);
    font-weight:16px;
`
const Image = styled.img`
    height:65vh;
`
export const HomePageFirstSection:React.FC=():JSX.Element=>{
    return(
        <MainSection>
            <Image src = 'https://untree.co/demos/impact/images/persons-group-1.png'/>
            <Content>
            <MainHeading>
                Let's growth your business <br/> with us
            </MainHeading>
            <Description>
                Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti<br/>
                iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam<br/>
                minima quo, consequuntur.
            </Description>
            <ActionButton content='Get In Touch' hover = {true}/>
                
            </Content>
            <Image src='https://untree.co/demos/impact/images/persons-group-2.png'/>        
        </MainSection>
    )
}