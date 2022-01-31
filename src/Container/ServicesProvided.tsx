import React from 'react';
import styled from 'styled-components';
import { Card } from '../Component/Card';
import { Row } from '../Component/Row';



export const ServicesProvided :React.FC=():JSX.Element=>{
    let con = 'Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.'
    return(
        <Row 
            component={[
                <Card heading='Professional' content={con} imageUrl='https://untree.co/demos/impact/images/svg/24-hours-support.svg'/>,
                <Card heading='Good Review' content={con}  imageUrl='https://untree.co/demos/impact/images/svg/good-review.svg'/>,
                <Card heading='24/7 Support' content={con} imageUrl='https://untree.co/demos/impact/images/svg/quotation.svg'/>    
            ]}
        />
        
    )
}