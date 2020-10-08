import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'


const TitlePage = ({ title, subtitle }) => {
    return (
        <>
            <Container>                
                <ContainerTitle>
                    <Title>                
                        <h1>{ title }</h1>  
                    </Title>     
                    <Subtitle>
                        <h2>{ subtitle }</h2>
                    </Subtitle>         
                </ContainerTitle>
            </Container>
        </>
    )
}



export default TitlePage


const ContainerTitle =styled.div`
    padding: 30px 0px 30px 0px
`
const Title = styled.div`
    h1{
        font-family: 'Archivo Black', sans-serif;    
    font-size: 2em;

    }
    
`
const Subtitle = styled.div`
h2 {
    font-size: 1.5em;
}



`