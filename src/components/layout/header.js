import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.png'

export default () => {

    const menu = [
        {
            name: "Ver avaliações",
            icon: "",
            link: "/ranking"
        }
      
        
    ]
    return (
        <Header>
            <Container>
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
margin-bottom: 5rem;
    
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
        color: #6bd9bc !important; 
        font-weight: bold;
        
        }            
    }  
    
    .navbar-nav .active .nav-link {
        color: #6bd9bc;
    }

    .navbar-nav .nav-link{
        color: #1b314c;
    }

   
`
const Logo = styled.div`
    font-weight: bolder;
    font-size: 1.8em;
    display:flex;
    align-items: center;
`