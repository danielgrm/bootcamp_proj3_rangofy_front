import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa"


export default () => {
    return (
        <Footer>
            <Container>
                <FooterCopy>
                <Row>
    <Col sm={4}>
    <div className="RRSS">
                            <span>Follow</span>
                            <FaInstagram className="icons"/>
                            <FaFacebookSquare className="icons"/>
                            <FaTwitter className="icons"/>                            
                        </div>                        
    </Col>
    
    <Col sm={4}>
   
    </Col>
    <Col sm={4}>
    <div className="copy">
                            Desenvolvido por Daniel Goulart &amp; Bruno Kuchel
                        </div>
    </Col>
  </Row>
                        
                        
            </FooterCopy>
                
            </Container>
        </Footer>

    )
}


const Footer = styled.div`
background: #e8ecfd;
color: #212529

`



const FooterCopy = styled.div`    
    width: 100%;    
    border-top: 3px solid #1b314c;
    margin-top: 20px;
    

    .RRSS{
        padding-top: 15px;
        font-size: 1.5em;
        text-align: left;
        font-weight: bold;
    }

    .icons{
            margin-left: 10px;
    }

    .copy{
        padding-top: 15px;
        font-size: 1em;
        text-align: left;
    }

    
`

