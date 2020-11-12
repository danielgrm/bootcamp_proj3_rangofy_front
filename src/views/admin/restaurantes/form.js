import React, {useState} from 'react'
import { Container, Card, Button, Col, Row, Form, Dropdown } from 'react-bootstrap'
import styled from 'styled-components'





const CreateResto = () => {
  const [form, setForm] = useState({})


  const handleChange = (attr) => {
    const { value, name } = attr.target
    setForm({
        ...form,
        [name]: value
    })
    return
}

const isFormValid = () =>  
    form.nome && 
    form.cozinha &&
    form.endereco &&
    form.instagram 


    return (
        <>
            
                <Container className="h-100" >
                    <Content>
                    <Row>
    

    <Col>    
    <CardResto >  
  <Card.Body>
  <Row>
            <ColForm xs={6} md={3}>
              
            </ColForm>
            <ColForm xs={6} md={6}>
            <Form.Group>
    <Form.Label>NOME</Form.Label>
    <Form.Control type="text" name="nome" placeholder="Nome do restaurante" onChange={handleChange} value={form.nome || ""}/>    
  </Form.Group>

  <Form.Group >
    <Form.Label>COZINHA</Form.Label>
    <Form.Control type="text" name="cozinha" placeholder="Tipo de cozinha" onChange={handleChange} value={form.cozinha || ""}/>
  </Form.Group>
  <Form.Group >
    <Form.Label>BAIRRO</Form.Label>
    <Form.Control type="text" name="endereco" placeholder="Bairro do restaurante" onChange={handleChange} value={form.endereco || ""}/>
  </Form.Group>
  <Form.Group >
    <Form.Label>INSTAGRAM</Form.Label>
    <Form.Control type="text" name="instagram" placeholder="@userinstarest" onChange={handleChange} value={form.instagram || ""}/>
  </Form.Group>
    <Button variant="primary" block disabled={!isFormValid()}>ENVIAR</Button>
    <Dropdown.Divider />
            </ColForm>
            <ColForm xs={6} md={3}>
              
            </ColForm>
          </Row>
  
    
    
    
  </Card.Body>
</CardResto>
    </Col>
    
  </Row>
                    
                    

                    </Content>
                    

                </Container>



            

        </>
    )
}



export default CreateResto

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
const CardResto = styled(Card)`

border: none;

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
const ColForm = styled(Col)`
    background: #FFF;
`