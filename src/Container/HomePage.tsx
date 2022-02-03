import React from 'react';
import styled from 'styled-components';
import { Card } from '../Component/Card';
import { Carousel } from '../Component/Carousel';
import { HomePageFirstSection } from '../Component/HomePageFirstSection';

import { Navbar } from '../Component/Navbar';
import { Row } from '../Component/Row';
import { Blogs } from '../Component/Blog';
import { BusinessGrowth } from '../Component/BusinessGrowth';
import { ServicesProvided } from '../Component/ServicesProvided';
import { VideoSection } from '../Component/Video';
import { WhyUs } from '../Component/WhyUs';

const LandingPage=styled.main`
    background-color:#008374;
    height:max-content;
`
const HomePageContainer = styled.div`
    
`

export const HomePage:React.FC=():JSX.Element=>{
    let con = 'Sapiente, assumenda suscipit autem ab expedita dignissimos,\
               corrupti iusto nobis ex aperiam cumque reprehenderit,\
                saepe culpa qui eos ullam minima quo, consequuntur.'
    return(
        <HomePageContainer>
            <LandingPage>
                <HomePageFirstSection/>
                <Row 
                    component={[
                        <Card  
                            heading='Design'
                            content={con}
                            icon = 'fas fa-layer-group' 
                            style={`color:white; & p{color:rgba(255, 255, 255, 0.5)}`}/>,
                        <Card 
                            heading='Applications' 
                            content={con}  
                            icon='fas fa-mobile-alt' 
                            style={`color:white; & p{color:rgba(255, 255, 255, 0.5)}`}/>,
                        <Card 
                            heading='eCommerce'
                            content={con}
                            icon='fas fa-shopping-bag'
                            style={`color:white; & p{color:rgba(255, 255, 255, 0.5)}`}/>    
                    ]}
                    style={'background-color:#009080;width:80vw'}
                />
            </LandingPage>
            <WhyUs/>
            <BusinessGrowth/>
            <ServicesProvided/>
            <VideoSection/>
            <Carousel/>
            <Blogs/>
        </HomePageContainer>
        
    )
}