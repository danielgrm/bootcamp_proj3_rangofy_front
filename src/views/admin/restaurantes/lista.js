import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import { listResto } from '../../../services/admin'
import { Table, Container } from 'react-bootstrap'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { ImEye } from 'react-icons/im'


import Loading from '../../../components/layout/loading'

const ListaRestaurantes = () => {
 
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
                    <th>LIKES</th>
                    <th>DISLIKES</th>
                    <th>AÇÕES</th>
                    
                    
                  </tr>
                </thead>
                
                <tbody>
                {sortByName.map((rest, i) => (
                  <tr key={i}>
                  
                  <td>{rest.nome}</td>
                  <td>{rest.cozinha}</td>
                  <td>{rest.endereco}</td>
                  <td>{rest.instagram}</td>
                  <td>{rest.like}</td>
                  <td>{rest.dislike}</td>
                  <td> <ImEye className="icon"/> <BiEditAlt className="icon"/> <BiTrash className="icon"/> </td>                  
                  
                </tr>
            
                ))}
                
               
                
              </tbody>
              
                
                </TableRating>
              }
                </Container>
                
            
           
        </>
    )
}



export default ListaRestaurantes

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
  font-size: 1.3em;
  cursor: pointer;
  :hover{
      color: #FF4C4C;
  }
  
}
`