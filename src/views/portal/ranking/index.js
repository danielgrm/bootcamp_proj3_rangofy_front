import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import TopTitle from '../../../components/layout/title'
import { listResto } from '../../../services/admin'
import { Table, Container } from 'react-bootstrap'
import Loading from '../../../components/layout/loading'

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
  
//<td>{rest.userlike.length}</td>
//<td>{rest.userdislike.length}</td>

const sortByRanking = restoList.sort(function(a, b){
  
   
  if (a.userlike.length > b.userlike.length) {
    return -1
  }
  if (a.userlike.length < b.userlike.length) {
    return 1
  }

   return 0
 
  
})

let index = 1


    return (
        <>        
                <TopTitle title="Os melhores restaurantes do RJ" subtitle="Segundo os nossos usuários"/>  
                <Container>
                {isLoading
                ? <Loading/>
                : <TableRating responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NOME</th>
                    <th>COZINHA</th>
                    <th>BAIRRO</th>
                    <th>INSTAGRAM</th>
                    <th>LIKES</th>
                    <th>DISLIKES</th>
                    
                  </tr>
                </thead>
                
                <tbody>
                {sortByRanking.map((rest, i) => (
                  <tr key={i}>
                  <td>{index++}</td>
                  <td>{rest.nome}</td>
                  <td>{rest.cozinha}</td>
                  <td>{rest.endereco}</td>
                  <td>{rest.instagram}</td>
                  <td>{rest.userlike.length}</td>
                  <td>{rest.userdislike.length}</td>
                  <td id="ranking" className="ranking">{rest.userlike.length - rest.userdislike.length}</td>
                  
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

.ranking{
  display: none;
}
`