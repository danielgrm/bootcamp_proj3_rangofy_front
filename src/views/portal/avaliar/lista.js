import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import TopTitle from '../../../components/layout/title'
import { listResto } from '../../../services/admin'
import { Table, Container, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { BiLike, BiDislike } from 'react-icons/bi'
import Loading from '../../../components/layout/loading'


const Avaliacoes = () => {



  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const [restoList, setRestoList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

useEffect(() => {  
  let get = async () => {
    setIsLoading(true)
    const resto = await listResto() 
    setRestoList(resto.data)
    setIsLoading(false)
  }
  
  get()
  
  return () => get = () => {
  }
  
}, [])
  

const sortByName = restoList.sort(function(a,b){
  if (a.nome > b.nome) {
    return 1
  }
  if (a.nome < b.nome) {
    return -1
  }
  return 0
})


  const radios = [
    { name: <BiLike className="icon"/>, value: '1' },
    { name: <BiDislike className="icon"/>, value: '2' },
    
  ];


    return (
        <>        
                <TopTitle title="Participe!" subtitle="Avalie os restaurantes que você conhece"/>  
                <Container>
                {isLoading
                ? <Loading/>
                : <TableRating responsive="sm">
                <thead>
                  <tr>
                    
                    <th>NOME</th>
                    <th>COZINHA</th>
                    <th>BAIRRO</th>
                    <th>INSTAGRAM</th>
                    <th>VOTAR!</th>
                    
                    
                  </tr>
                </thead>
                
                <tbody>
                {sortByName.map((rest, i) => (
                  <tr key={i}>
                  
                  <td>{rest.nome}</td>
                  <td>{rest.cozinha}</td>
                  <td>{rest.endereco}</td>
                  <td>@botekojambolao</td>
                  <td><ButtonGroup toggle>
                      {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        type="radio"
                        variant="info"
                        name="radio"
                        value={radio.value}
                        checked= {radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                      {radio.name}
                      </ToggleButton>
                      ))}
                      </ButtonGroup></td>                 
                  
                </tr>
            
                ))}
                
               
                
              </tbody>
              
                
                </TableRating>
              }
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

