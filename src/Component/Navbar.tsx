import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
    display:flex;
    padding:20px 50px;
    box-sizing:border-box;
    background-color:#008374;
    z-index:9;
    justify-content:space-between;
    
`
const NavItemContainer = styled.ul`
    width:40%;
    list-style-type:none;
    display:flex;
    justify-content:space-evenly
`
const NavItem = styled.li`
    color:rgba(255,255,255,0.7);
    cursor:pointer;
    padding-bottom:20px;
    font-size:14px;
    &:hover{
        color:white
    }
    
`


const DropDownMenu = styled.div`
    background-color:white;
    padding:20px 0px;
    text-align:left;
    display:none;
    width:180px;
    position:absolute;
    left:-20%;
    top:50%;
    margin-top:5px;
    box-shadow:0 2px 10px -2px rgb(0 0 0 / 10%);
`
const SubDropDownMenu = styled.div`
    background-color:white;
    padding:20px 0px;
    text-align:left;
    display:none;
    width:180px;
    position:absolute;
    left:112%;
    top:-30%;  
    margin-top:5px;
    box-shadow:0 2px 10px -2px rgb(0 0 0 / 10%);
`

const SubDropDownHeading = styled.div`
    width:100%;
    display:flex;
    padding-right:20px;
    justify-content:space-between;
    
`
const DropDownWrapper = styled.div`
    position:relative;
    &:hover ${DropDownMenu}{
        display:block;
    }
    
 `
 const SubDropDownWrapper = styled.div`
    position:relative;
    &:hover ${SubDropDownMenu}{
        display:block;
    }
 `
const DropDownItem = styled.li`
    padding:5px 20px;
    cursor:pointer;
    color:black;    
    &:hover{
        color:red
    }
`
const Icon = styled.i`
margin-bottom:auto;
margin-top:auto;
`

export const Navbar:React.FC = ():JSX.Element=>{
    const location = useLocation()

    return(
        <Header>
            <div>Impact</div>
            <NavItemContainer>
                <NavItem style={{color:'white'}}>Home</NavItem>
                <DropDownWrapper>
                    <NavItem>Dropdown <Icon className="fas fa-caret-down"></Icon></NavItem>
                    
                    <DropDownMenu>
                        <DropDownItem>
                            Menu One
                        </DropDownItem>
                        <DropDownItem>
                            <SubDropDownWrapper>
                                <SubDropDownHeading>
                                <span>Menu Two</span>
                                <Icon className="fas fa-caret-right"></Icon> 
                                </SubDropDownHeading>
                                
                                 <SubDropDownMenu>
                                    <DropDownItem>Sub Menu One</DropDownItem>
                                    <DropDownItem>Sub Menu Two</DropDownItem>
                                    <DropDownItem>Sub Menu Three</DropDownItem>
                                </SubDropDownMenu> 
                             </SubDropDownWrapper>    
                        </DropDownItem>
                        <DropDownItem>
                            Menu Three
                        </DropDownItem>
                    </DropDownMenu>  
                </DropDownWrapper>

                <Link to='/services' style={{textDecoration:'none'}}>
                    <NavItem>
                        Services
                    </NavItem>
                </Link>
                
                <NavItem>Blog</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact Us</NavItem>
            </NavItemContainer>
        </Header>
    )
}