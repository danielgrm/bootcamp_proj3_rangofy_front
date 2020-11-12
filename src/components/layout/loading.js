import React from 'react'
import {  Spinner } from 'react-bootstrap'
import styled from 'styled-components'


const Loading = ({ title, subtitle }) => {
    return (
        <>
                            
                <ContainerLoading>
                  <Spinner animation="border" size="xl"/>    
                </ContainerLoading>
            
        </>
    )
}



export default Loading

const ContainerLoading = styled.div`
padding-top: 5rem;
text-align: center;
align-items: center;
color: #212529;
`
