import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReviewData } from '../Utils/review';
import { ReviewSection } from './ReviewSection';



const Container = styled.div`
    background-color:#fafafa;
    width:100%;
    height:fit-content;
    padding-top:50px;
    overflow-y:hidden;
    box-sizing:border-box;
`

const CarouselContainer = styled.div`
    overflow:hidden;
    width:100%;
    display:flex;
    padding-left:30px;
    padding-right:30px;
    box-sizing:border-box;
    justify-content:space-between;
`
const Icon = styled.i`
    height:100%;
    cursor:pointer;
    padding-top:8%;
    font-size:24px;
    box-sizing:border-box;
    @media (max-width:768px){
        display:none;
    }    
`

const List=styled.ul`
    display:flex;
    list-style:none;
    padding-top:50px;
    justify-content:center;
`

export const Carousel:React.FC=():JSX.Element=>{
    const [activeReview,setActiveReview] = useState(0);
    const [currentData,setCurrentData] = useState(ReviewData[activeReview]);
    const [nextAnimate,setNextAnimate] = useState(true)
    const [prevAnimate,setPrevAnimate] = useState(false)

    const ListItem=styled.li`
    width:8px;
    height:8px;
    border-radius:50%;
    background-color:rgba(248, 90, 64, 0.1);
    color:#f85a40;
    line-height:40px;
    text-align:center;
    margin-left:8px;
    cursor:pointer;
    margin-bottom:25px;
    &[data-id="${activeReview}"] {
        background-color:#f85a40;
      }


    &:hover{
        background-color:#f85a40;
        color:#fff;
    }
`

    useEffect(()=>{
        setCurrentData(ReviewData[activeReview])
        const timer = setInterval(()=>{
            setNextAnimate(true)
            setPrevAnimate(false)
            setActiveReview((activeReview+1)%ReviewData.length)

        },5000)

        return ()=>{
            clearInterval(timer)
        }
    },[activeReview])    
    
    const handleOnClick=(e:React.MouseEvent<HTMLElement>)=>{
        if(Number(e.currentTarget.getAttribute('data-id'))>activeReview){
            setNextAnimate(true)
            setPrevAnimate(false)
        }else if(Number(e.currentTarget.getAttribute('data-id'))<activeReview){
            setPrevAnimate(true)
            setNextAnimate(false)
        }else{
            setNextAnimate(false)
            setPrevAnimate(false)
        }
        setActiveReview(Number(e.currentTarget.getAttribute('data-id')))
    }
    
    const handlePrevClick=()=>{
        setNextAnimate(false)
        setPrevAnimate(true)
        activeReview==0?setActiveReview(ReviewData.length-1):setActiveReview((activeReview-1)%ReviewData.length)
    }

    const handleNextClick=()=>{
        setNextAnimate(true)
        setPrevAnimate(false)
        setActiveReview((activeReview+1)%ReviewData.length)
    }

    return(
        <Container>
            
            <CarouselContainer>
                <Icon className='fas fa-chevron-left' onClick={()=>handlePrevClick()}/>
                    
                    <ReviewSection 
                        name={currentData.name}
                        imageUrl={currentData.imageUrl} 
                        designation={currentData.designation} 
                        feedback={currentData.feedback}
                        nextAnimate={nextAnimate}
                        prevAnimate={prevAnimate}
                    />

                <Icon className='fas fa-chevron-right' onClick={()=>{handleNextClick()}}/>
            
            </CarouselContainer>
            <List>
                {
                    ReviewData.map(item=>{
                        return(
                            <ListItem data-id={item.id} data-active={true} onClick={(e)=>handleOnClick(e)} ></ListItem>
                        )
                        
                    })
                }
            </List>
        </Container>
    )
}