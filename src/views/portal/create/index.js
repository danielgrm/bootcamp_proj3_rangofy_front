import React, {useState} from 'react'
import { Container, Card, Button, Col, Row, Form, Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import { addUser } from '../../../services/admin'
import history from '../../../config/history'

//



const CreateUser = () => {
  const [form, setForm] = useState({
    is_active: true,
    is_admin: false
  })


  const handleChange = (attr) => {
    const { value, name } = attr.target
    setForm({
        ...form,
        [name]: value
    })
    return
}

const isFormValid = () => form.nome && form.email && form.senha

const [loading, setLoading] = useState(false)

const submitForm = async() => {
  const message = (type, message) => Swal.fire({
    position: 'center',
    //icon: type || 'success',
    title: message || `Conta criada com sucesso!`,
    showConfirmButton: false,
    timer: 2500
})

  
    if(isFormValid()){
      try {
        setLoading(true)
        await addUser(form)
        message('success', `Conta criada com sucesso!`)
        history.push('/avaliar')
    
    
    
  } catch (error) {
    message('error', `Erro ao cadastrar`)
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
    <Col></Col>

    <Col>    
    <CardLogin >
  <Card.Header>CADASTRE-SE!</Card.Header>
  <Card.Body>
  <Form.Group>
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" name="nome" placeholder="Insira o seu nome" onChange={handleChange} value={form.nome || ""} disabled={loading} onKeyPress={pressEnter}/>    
  </Form.Group>    
    <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Insira o seu email" onChange={handleChange} value={form.email || ""} disabled={loading} onKeyPress={pressEnter}/>    
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="senha" placeholder="Insira o password" onChange={handleChange} value={form.senha || ""} disabled={loading} onKeyPress={pressEnter}/>
  </Form.Group>
    <Button variant="primary" block disabled={!isFormValid()} onClick={submitForm}>{loading? (<SpinnerLoading animation="border" size="sm"/>):"CADASTRAR"}</Button>
  </Card.Body>
</CardLogin>
    </Col>
    <Col></Col>
  </Row>
                    
                    

                    </Content>
                    

                </Container>



            

        </>
    )
}



export default CreateUser

const Content = styled.div`
align-items: center;
padding-top: 5rem;
    
    h1{
        font-family: 'Archivo Black', sans-serif;
    }
    p{
        font-size:1em;
    }
`
const CardLogin = styled(Card)`
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
`
const SpinnerLoading = styled(Spinner)`
background:transparent;
`