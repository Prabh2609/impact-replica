import React,{useEffect,useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const NavItemContainer = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-evenly;
    @media (max-width: 768px) {
        min-height:40vh;
        margin-top:15vh;
        flex-direction:column;
        text-align:left;
        padding-left:20px;
        
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
    @media (max-width:768px){
        padding-top:0px;
    }
`
const Icon = styled.i`
margin-bottom:auto;
margin-top:auto;
@media (max-width: 768px){
    float:right;
}
`

const DropDownWrapper = styled.div`
    position:relative;
    &:hover{
        & ${DropDownMenu}{
            display:block;
        }  
    }
    @media (max-width: 768px){
        display:none;
    }
 `
 const SideDropDownWrapper = styled.div`
    display:none;
    @media (max-width: 768px){
        display:block;
    }
 `

 const SideDropDownMenu = styled.div`
    
 `
export const Nav:React.FC=():JSX.Element=>{
    const location = useLocation()
    
    const [active,setActive] = useState('/home')
    const [openDropDown,setOpenDropDown] = useState(false)
    const [openSubDropDown,setOpenSubDropDown] = useState(false)
    const [openSideBar,setOpenSideBar] = useState(false)

    useEffect(()=>{
        setActive(location.pathname)
    },[location])

    const toggleDropDown=()=>{
        setOpenDropDown(!openDropDown)
    }

    const toggleSubDropDown=()=>{
        setOpenSubDropDown(!openSubDropDown)
    }

    
    const NavItem = styled.li`
    color:rgba(255,255,255,0.7);
    cursor:pointer;
    padding-bottom:20px;
    font-size:14px;
    &[data-value="${active}"] {
        color:#fff;
      }   
    &:hover{
        color:white
    }
    @media (max-width: 768px) {
        color:#000;
        padding-bottom:18px;
        &[data-value="${active}"] {
            color:red;
          }
        
    }
`
    return(
        
        <NavItemContainer>
        <Link to={'/'}>
            <NavItem data-value='/home'>Home</NavItem>
        </Link>
        
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
        <SideDropDownWrapper>
        <NavItem onClick={()=>toggleDropDown()}>Dropdown <Icon className="fas fa-caret-down"></Icon></NavItem>
        </SideDropDownWrapper>
        
        {
            openDropDown?
                <SideDropDownMenu>
                <DropDownItem>
                    <NavItem>Menu One</NavItem>
                </DropDownItem>
                <DropDownItem>
                    <NavItem onClick={()=>toggleSubDropDown()}>Menu Two <Icon className='fas fa-caret-down'/></NavItem>
                    {
                        openSubDropDown?
                            <SideDropDownMenu>
                                <DropDownItem>
                                    <NavItem>Sub Menu One</NavItem>
                                </DropDownItem>
                                <DropDownItem>
                                    <NavItem>Sub Menu Two</NavItem>
                                </DropDownItem>
                                <DropDownItem>
                                    <NavItem>Sub Menu Three</NavItem>
                                </DropDownItem>
                            </SideDropDownMenu>
                            :
                            null
                    }
                    
                </DropDownItem>
                <DropDownItem>
                    <NavItem>Menu Three</NavItem>
                </DropDownItem>
                
                </SideDropDownMenu>
                :null
        }
        
        <Link to='/services'>
            <NavItem data-value='/services'>
                Services
            </NavItem>
        </Link>
        <Link to='/blog'>
            <NavItem data-value='/blog'>Blog</NavItem>
        </Link>               
        
        <NavItem>About</NavItem>
        <NavItem>Contact Us</NavItem>
        
    </NavItemContainer>
    )
}