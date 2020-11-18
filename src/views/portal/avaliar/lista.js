import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import TopTitle from '../../../components/layout/title'
import { listResto, like } from '../../../services/admin'
import { Table, Container, Button} from 'react-bootstrap'
import { BiLike, BiDislike } from 'react-icons/bi'
import Loading from '../../../components/layout/loading'
//import { getUser } from '../../../config/auth'
//import { useParams } from 'react-router-dom'


const Avaliacoes = () => {


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



    return (
        <>        
                <TopTitle title="Participe!" subtitle="Avalie os restaurantes que você conhece"/>  
                <Container>
                {isLoading
                ? <Loading/>
                : <TableRating responsive="sm">
                  {/*<input name="_id" type="hidden" onChange={handleChange} value={form.getUser().id}/>
                  <input name="email" type="hidden" onChange={handleChange} value={form.getUser().email}/>*/}
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
                  <td>{rest.instagram}</td>
                  <td><Button variant="info" onClick={() => like()}><BiLike className="icon"/></Button><Button variant="danger"><BiDislike className="icon"/></Button></td>                 
                  
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
  margin-left: 0.2rem;
  padding: 0.1rem;
  font-size: 1.5rem;
  //background: transparent;
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

