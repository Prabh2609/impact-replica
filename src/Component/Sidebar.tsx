import React from 'react';
import styled,{keyframes} from 'styled-components';
import { Nav } from './NavItem';

interface Props{
    onClose():void;
}

const Backdrop = styled.div`
      display:none;
      height:100vh;
      width:100vw;
      background-color:rgba(0,0,0,0.2);
      @media (max-width: 768px) {
        display:block;
        position:absolute;
        left:0px;
        top:0px;
      }
 `
 const slideLeft=keyframes`
      from{width:0;opacity:0;}
      to{width:intial;opacity:1;}
 `
 const slideRight = keyframes`
      from{width:40vw;}
      to{width:0;display:none;}
 `
 const fadeIn = keyframes`
      from{opacity:0;}
      to{opacity:1;}
 `

 const SidebarContainer=styled.div`
      background-color:#fff;
      width:40vw;
      height:100vh;
      float:right;
      padding:8px 20px;
      animation:${slideLeft} 0.5s linear;
      box-sizing:border-box;
      @media (max-width:426px){
          width:50vw;
      }
 `
 const Icon=styled.i`
      color:#000;
      cursor:pointer;
      float:right;
      font-size:28px;
      animation:${fadeIn} 0.5s linear;
 `

export const Sidebar:React.FC<Props>=({onClose}):JSX.Element=>{
    return(
        <Backdrop>
            <SidebarContainer>
                <Icon className='fas fa-times' onClick={()=>onClose()}/>
                <Nav/>
            </SidebarContainer>
        </Backdrop>
    )
}