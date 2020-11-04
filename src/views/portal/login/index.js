import React, {useState} from 'react'
import { Container, Card, Button, Col, Row, Form, Dropdown } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../../../config/history'
//import styled from 'styled-components'



const CreateUser = () => {
  const [form, setForm] = useState({})


  const handleChange = (attr) => {
    const { value, name } = attr.target
    setForm({
        ...form,
        [name]: value
    })
    return
}

const isFormValid = () =>  form.email && form.password


    return (
        <>
            
                <Container className="h-100" >
                    <Content>
                    <Row>
    <Col></Col>

    <Col>    
    <CardLogin >
  <Card.Header>LOGIN</Card.Header>
  <Card.Body>
  
    <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Insira o seu email" onChange={handleChange} value={form.email || ""}/>    
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Insira o password" onChange={handleChange} value={form.password || ""}/>
  </Form.Group>
    <Button variant="primary" block disabled={!isFormValid()}>LOGAR</Button>
    <Dropdown.Divider />
    <Nav>
    <Card.Link onClick={()=> history.push('/novo-usuario')}>Ainda não tem conta? Cadastre-se!</Card.Link>
    </Nav>
    
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