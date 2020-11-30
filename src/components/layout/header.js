import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.png'
import { getUser, removeToken } from '../../config/auth'
import history from '../../config/history'
import { isAuthenticated } from '../../config/auth'
import { FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa'



export default () => {
    const isLogged = isAuthenticated()

    const logout = () => {
        removeToken()
        history.push('/')
    }

    const menu = [
        {
            name: "Ver avaliações",
            icon: "",
            link: "/ranking"
        },
        {
            name: "Avaliar!",
            icon: "",
            link: "/avaliar"
        }
      
        
    ]
    return (
        <Header>            
            <Container>
                {isLogged
                ?  <NavUser><FaRegUserCircle className="icon"/>
                    {getUser().name}
                    <button onClick={logout}><FaSignOutAlt/></button>
                    </NavUser>
                : ""
                }
        
            
            <Navbar collapseOnSelect expand="lg" variant="light">
                <NavLink to={'/'}>
                <Navbar.Brand>
                    <Logo>
                    <img src={LogoImg} alt="Asgard Health"/>
                    <span>Rangofy</span>
                    </Logo>
                    </Navbar.Brand>
                </NavLink>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav>
        {menu.map((item, i) => (
            <NavLink exact={true} to={item.link} key={i}>
                <Nav.Link as="div">{item.name}</Nav.Link>
            </NavLink>

        ))}
      
      
    </Nav>    
  </Navbar.Collapse>
</Navbar>
</Container>
        </Header>

    )
}

const Header = styled.div`
//margin-bottom: 3rem;
background: #e8ecfd;

    
    a {
        text-decoration: none;
               
    }

    .navbar{
        padding: 10px 0px 10px 0px;
        border-bottom: 3px solid #1b314c;
    }

    .navbar-brand{
        color: #1b314c;
        font-size: 1.5em;
    }
    
    .navbar-toggler{
        padding: 0px;
        border: none;
      
    }

          
    

    
    .navbar-toggler:focus{
        outline: none;
        border: none;        
    }
    

    .nav-link{
        font-size: 1.2em;
        font-weight: bold;
                   

        :hover{
        color: #FE5050 !important; 
        font-weight: bold;
        
        }            
    }  
    
    .navbar-nav .active .nav-link {
        color: #FE5050;
    }

    .navbar-nav .nav-link{
        color: #212529;
    }

    .navbar-toggler-icon {
        
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(33,37,41, 1)' stroke-width='2' stroke-linecap='square' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
`
const Logo = styled.div`
    font-weight: bolder;
    font-size: 1.8em;
    display:flex;
    align-items: center;
    span { 
        color: #212529;
    }
`
const NavUser = styled.div`
    text-align: right;
    font-weight: bold;
    .icon {
        margin-right: 0.3rem;
        
    }
    button {
        background: transparent;
        border: none;
        margin-left: 0.5rem;
        :hover {
            color: #FE5050;
        }
    }
`