import React from 'react';
import { Card } from './Card';
import { Row } from './Row';

const CardStyle=`
    @media (max-width:768px){
        flex-direction:row;
    }
    @media (max-width:426px){
        height:30%;
        & img{
            width:15%;
        }
    }
`
const rowStyle = `
    @media (max-width:426px){
        width:100%;
    }
`

export const ServicesProvided :React.FC=():JSX.Element=>{
    let con = 'Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.'
    return(
        <Row 
            style={rowStyle}
            component={[
                <Card style={CardStyle} heading='Professional' content={con} imageUrl='https://untree.co/demos/impact/images/svg/24-hours-support.svg'/>,
                <Card style={CardStyle} heading='Good Review' content={con}  imageUrl='https://untree.co/demos/impact/images/svg/good-review.svg'/>,
                <Card style={CardStyle} heading='24/7 Support' content={con} imageUrl='https://untree.co/demos/impact/images/svg/quotation.svg'/>    
            ]}
        />
        
    )
}