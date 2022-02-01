import React from 'react';
import styled from 'styled-components';
import { Card } from '../Component/Card';
import { Row } from '../Component/Row';

const Container = styled.div`
    width:100%;
    padding:50px;
    height:100vh;
    box-sizing:border-box;
`
const Heading = styled.h3`
`
const Description = styled.p`
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
                        style='display:block;& img{width:90%;height:50%;padding-top:0px;border-radius:8px;margin-left:5%;}' 
                        imageUrl='https://untree.co/demos/impact/images/post_2.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style='display:block;& img{width:90%;height:50%;padding-top:0px;border-radius:8px;margin-left:5%;}' 
                        imageUrl='https://untree.co/demos/impact/images/post_3.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />,
                    <Card 
                        style='display:block;& img{width:90%;height:50%;padding-top:0px;border-radius:8px;margin-left:5%;}' 
                        imageUrl='https://untree.co/demos/impact/images/post_4.jpg' 
                        heading='Important of getting a notifications'
                        action='Read More'
                        metaData='27 May 2021 . 12 Comments'
                        content='Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.'
                    />
                ]}
            />
        </Container>
    )
}