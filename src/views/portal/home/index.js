import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
//import styled from 'styled-components'
import Layout from '../../../components/layout/index'



const Home = () => {
    return (
        <>
            <Layout>
                <Container className="h-100" >
                    <Content>
                    <Jumbotron>
                        <Container>
                            <h1>Bateu um rangão maravilhoso?</h1>
                            <p>
                            Compartilhe a sua experiência com a gente!
    </p>
                        </Container>
                    </Jumbotron>

                    </Content>
                    <Content>
                    <Jumbotron>
                        <Container>
                            <h1>Deu aquela larica e não sabe aonde ir?</h1>
                            <p>
                            Olha o que a galera recomenda pra você!
    </p>
                        </Container>
                    </Jumbotron>

                    </Content>
                    

                </Container>



            </Layout>

        </>
    )
}



export default Home

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
