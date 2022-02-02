import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from './NavItem';
import { Sidebar } from './Sidebar';


const Header = styled.header`
    display:flex;
    padding:20px 80px;
    box-sizing:border-box;
    background-color:#008374;
    z-index:9;
    justify-content:space-between;

    @media (max-width: 768px) {
        position:relative;
      }
    
`

 const Logo = styled.div`
 font-weight:700;
 font-size:24px;
 font-family:"Montserrat", sans-serif;
 line-height:1.8;
 color:#fff;
`
 const Hamburger = styled.i`
    color:#fff;
    font-size:30px;
    height:100%;
    display:none;
    cursor:pointer;

    @media (max-width: 768px) {
        display:block;
      }
 `

 const LargeNav=styled.div`
      width:50%;
      @media (max-width: 768px) {
        display:none;
      }
 `

 
export const Navbar:React.FC = ():JSX.Element=>{
    const [openSideBar,setOpenSideBar] = useState(false)
    
    const toggleSideBar=():void=>{
        setOpenSideBar(!openSideBar)
    }

    
    return(
        <Header>
            
            <Link to={'/'}>
                <Logo>Impact</Logo>
            </Link>
            <LargeNav>
                <Nav/>
            </LargeNav>
            <Hamburger className='fas fa-bars' onClick={()=>toggleSideBar()}/>
            {
                openSideBar?<Sidebar onClose={toggleSideBar} />:null
            }
                  
        </Header>
        
    )
}