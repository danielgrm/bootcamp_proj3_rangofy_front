import React from 'react'
//import { styled } from 'styled-components'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Layout = ({ children }) => {
    return (
        <>
            <Content>
                <Header />
                <Main>
                    {children}
                </Main>

                <Footer />
            </Content>
        </>

    )
}

export default Layout

const Content = styled.div`
background: #e8ecfd;
min-height: 100vh;
display: flex;
flex-direction: column;
`


const Main = styled.div`
    flex: 1 0 auto;
    min-height: 400px;

`