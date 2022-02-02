import React from 'react';
import styled from 'styled-components';
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

 const SidebarContainer=styled.div`
      background-color:#fff;
      width:40vw;
      height:100vh;
      float:right;
      padding:8px 20px;
      box-sizing:border-box;
 `
 const Icon=styled.i`
      color:#000;
      cursor:pointer;
      float:right;
      font-size:28px;
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