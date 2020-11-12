import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
//import styled from 'styled-components'



const Dash = () => {
    return (
        <>
            
                <Container className="h-100" >
                    <Content>
                    <Jumbotron>
                        <Container>
                            <h1>Bem-vindo!</h1>
                            <p>
                            Aqui você pode gerenciar os restaurantes e os usuários
    </p>
                        </Container>
                    </Jumbotron>

                    </Content>
                    

                </Container>



            

        </>
    )
}



export default Dash

const Content = styled.div`
    .jumbotron{
        background: none;
        text-align:center;
    }

    h1{
        font-family: 'Archivo Black', sans-serif;
    }
    p{
        font-size:2em;
    }
`
