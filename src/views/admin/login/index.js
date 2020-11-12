import React, {useState} from 'react'
import { Container, Card, Button, Col, Row, Form, Dropdown, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../../../config/history'
import { authentication } from '../../../services/auth'
import  http  from '../../../config/http'
import { saveToken } from '../../../config/auth'
//


const LoginAdmin = () => {
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

const isFormValid = () =>  form.email && form.senha

const submitForm = async () => {
  if (isFormValid()) {
    try {
      setLoading(true)
      const { data } = await authentication(form)
      const { token } = data
      http.defaults.headers["x-auth-token"] = token
      saveToken(data)
      history.push('/admin')
    } catch (error) {
      console.log('error', error)
      setLoading(false)
      
    }
  }

} 

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
    <Form.Control type="email" name="email" placeholder="Insira o seu email" onChange={handleChange} value={form.email || ""} disabled={loading}/>    
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="senha" placeholder="Insira o password" onChange={handleChange} value={form.senha || ""} disabled={loading}/>
  </Form.Group>
    <Button variant="primary" block disabled={!isFormValid()} onClick={submitForm}>{loading? (<SpinnerLoading animation="border" size="sm"/>):"LOGAR"}</Button>
    <Dropdown.Divider />
    
    
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



export default LoginAdmin

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
margin-top:10rem;
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
const SpinnerLoading = styled(Spinner)`
background:transparent;
`