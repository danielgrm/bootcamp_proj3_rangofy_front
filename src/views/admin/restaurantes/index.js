import React, { useState } from 'react'
import TopTitle from '../../../components/layout/title'
import ListaRestaurantes from './lista'
import CreateResto from './form'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'



const Restaurantes = () => {

    const [isForm, setForm] = useState(false)
    const [update, setUpdate] = useState({})

    const updateCategory = (catg) => {
        setForm(true)
        setUpdate(catg)
    }


 
 
    return (
        <>        
                <TopTitle title={isForm ? "Adicionar restaurante" : "Lista de restaurantes" } />  
                <Nav>
                <Button size="sm" variant="info" onClick={() => setForm(!isForm)}>
                {isForm ? "LISTA" : "NOVO"}
                </Button>
                </Nav>
                
                { isForm
                ? <CreateResto/>//<FormCategory update={update} />
                : <ListaRestaurantes updateCategory={updateCategory} />
            }

                

           
        </>
    )
}



export default Restaurantes

const Nav = styled(Container)`
text-align: right;
margin-bottom: 1rem;
`

