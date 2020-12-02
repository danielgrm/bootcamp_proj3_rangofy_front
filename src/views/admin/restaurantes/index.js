import React, { useState } from 'react'
import TopTitle from '../../../components/layout/title'
import ListaRestaurantes from './lista'
import CreateResto from './form'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'



const Restaurantes = () => {

    const [isForm, setIsForm] = useState(false)
    const [update, setUpdate] = useState({})

    const updateResto = (rest) => {
        setIsForm(true)
        setUpdate(rest)
    }

    const newResto = () => {
        setUpdate(false)
        setIsForm(!isForm)
    }

    return (
        <>
            <TopTitle title={isForm ? "Cadastro de restaurantes" : "Lista de restaurantes"} />
            <Nav>
                <Button size="sm" variant="info" onClick={() => newResto()}>{!isForm ? "NOVO" : "LISTA"}</Button>
            </Nav>
            { isForm
                ? <CreateResto update={update} />
                : <ListaRestaurantes updateResto={updateResto} />
            }
        </>
    )
}



export default Restaurantes

const Nav = styled(Container)`
text-align: right;
margin-bottom: 1rem;
`

