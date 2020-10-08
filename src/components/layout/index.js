import React from 'react'
//import { styled } from 'styled-components'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Layout = ({ children }) =>{
    return (
        <>
        <Header/>
        <Content>
            { children }
        </Content>
        
        <Footer/>
        </>

    )
}

export default Layout

const Content = styled.div`
    min-height: 500px;

`