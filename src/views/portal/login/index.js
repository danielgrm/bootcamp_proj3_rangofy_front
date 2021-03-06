import React, { useState } from 'react'
import { Container, Card, Button, Col, Row, Form, Dropdown, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../../../config/history'
import Swal from 'sweetalert2'


import { authentication } from '../../../services/auth'
import http from '../../../config/http'
import { saveToken } from '../../../config/auth'

const LoginUser = () => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)


  const handleChange = (attr) => {
    const { value, name } = attr.target
    setForm({
      ...form,
      [name]: value
    })
    return
  }

  const isFormValid = () => form.email && form.senha

  const submitForm = async () => {
    const message = (message) => Swal.fire({
      position: 'center',
      title: message,
      showConfirmButton: false,
      timer: 2000
    })
    if (isFormValid()) {
      try {
        setLoading(true)
        const { data } = await authentication(form)
        const { token } = data
        http.defaults.headers["x-auth-token"] = token
        saveToken(data)
        history.push('/avaliar')
      } catch (error) {
        
        const errorBack = error.response.data.errors
        if (errorBack) {
          const items = errorBack.map(item => item.msg)          
          const msgError = items.toString()
          console.log(msgError)
           
          message(msgError)       
        }       
        setLoading(false)

      }
    }

  }

  const pressEnter = (event) => event.key === 'Enter' ? submitForm() : null

  return (
    <>

      <Container className="h-100" >
        <Content>
          <Row>
            <Col/>
            <Col xs={10} sm={6} xl={4}>
              <CardLogin >
                <Card.Header>LOGIN</Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Insira o seu email" onChange={handleChange} value={form.email || ""} disabled={loading} onKeyPress={pressEnter} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="senha" placeholder="Insira o password" onChange={handleChange} value={form.senha || ""} disabled={loading} onKeyPress={pressEnter} />
                  </Form.Group>
                  <Button variant="primary" block disabled={!isFormValid()} onClick={submitForm}>{loading ? (<SpinnerLoading animation="border" size="sm" />) : "LOGAR"}</Button>
                  <Dropdown.Divider />
                  <Nav>
                    <Card.Link onClick={() => history.push('/novo-usuario')}>Ainda não tem conta? Cadastre-se!</Card.Link>
                  </Nav>
                </Card.Body>
              </CardLogin>
            </Col>
            <Col/>
          </Row>
        </Content>
      </Container>
    </>
  )
}



export default LoginUser

const Content = styled.div`
align-items: center;
padding-top: 5rem;

a{
  :hover {
    color: #1b314c;

  }
}
    
    h1{
        font-family: 'Archivo Black', sans-serif;
    }
    p{
        font-size:1em;
    }
`
const CardLogin = styled(Card)`
margin-bottom: 4rem;
border: none;
.card-header {
  text-align:center;
  background: #fff;
  font-size: 2em;
  font-weight: bold;
}

.h3 {
  background: #fff;
}

.card-body{
    background: #fff;
    
}

.form-group{
    background: #fff;
}

.form-control{
  border-color: #1b314c;
  border-radius: 0px;
}

.form-label{
    background: #fff;
    font-weight: bold;
}
.btn-primary {
  background: #1b314c;
  border: none;
}

.card-link{
  
  cursor: pointer;
  color: #AAA;
  
}
`

const Nav = styled.div`
text-align: center;
background: #FFF;
`

const SpinnerLoading = styled(Spinner)`
background:transparent;
`
