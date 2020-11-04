import React, { useState }from 'react'
import styled from 'styled-components'
import TopTitle from '../../../components/layout/title'
import { Table, Container, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { BiLike, BiDislike } from 'react-icons/bi'

const Avaliacoes = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');


  const radios = [
    { name: <BiLike className="icon"/>, value: '1' },
    { name: <BiDislike className="icon"/>, value: '2' },
    
  ];


    return (
        <>        
                <TopTitle title="Os melhores restaurantes do RJ" subtitle="Segundo os nossos usuários"/>  
                <Container>
                <TableRating responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>NOME</th>
        <th>COZINHA</th>
        <th>BAIRRO</th>
        <th>INSTAGRAM</th>
        <th>LIKES</th>
        <th>DISLIKES</th>
        <th>VOTA!</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>BOTEKO DO JAMBOLÃO</td>
        <td>PETISCARIA</td>
        <td>SEI LÁ</td>
        <td>@botekojambolao</td>
        <td>10</td>
        <td>0</td>
        <td><ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="danger"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup></td>
      </tr>
     
      
    </tbody>
    </TableRating>
                </Container>
                
            
           
        </>
    )
}



export default Avaliacoes

const TableRating = styled(Table)`
th {
  background: #FFF;
}  

.btn {
  padding: 0.3rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  
}

.btn .active .btn- {
  :focus{
    background:red;
  }
}


.icon {
  background-color: transparent;
  color: #212529;
}
`