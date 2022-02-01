import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../Component/Button';
import { Card } from '../Component/Card';
import { Row } from '../Component/Row';
import { ServicesProvided } from './ServicesProvided';
import { VideoSection } from './Video';
import { WhyUs } from './WhyUs';

const Container = styled.main`
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

const rowStyle = `background-color:#fafafa;
                width:100%;
                padding:50px;
`

const cardStyle=`background-color:#fff;
                margin-bottom:30px;
                display:block;
`

const cardIcon = `color:#008374;
                  font-size:40px;
                  text-align:center;
`

export const Services:React.FC=():JSX.Element=>{
    
    return(
        <Container>
            <Landing>
                <MainHeading>Services</MainHeading>
                <Description>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti<br/>
                    iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam<br/>
                    minima quo, consequuntur.
                </Description>
                <ActionButton content='Get In Touch' hover={true}/>
            </Landing>
            <ServicesProvided/>
            
            <VideoSection/>
            <Row
                style={rowStyle}
                component={[
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        icon='fas fa-chart-pie' 
                        heading='Digital Solution'
                        
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        heading='Marketing Solution'
                        icon='fab fa-telegram-plane'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        heading='Unmatched Support'
                        icon='far fa-life-ring'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        heading='IT Development'
                        icon='fas fa-laptop'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        heading='Lead Generation'
                        icon='fas fa-envelope'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style={`${cardStyle} & i{${cardIcon}}`} 
                        heading='Mobile Application'
                        icon='fas fa-mobile-alt'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />
                ]} 
            />
            <WhyUs/>
        </Container>
    )
}