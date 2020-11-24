import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import { listRestoID } from '../../../services/admin'
import { Table, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/layout/loading'
import TopTitle from '../../../components/layout/title'


const PerfilRestaurante = (props) => {
 
  const [restoProfile, setRestoProfile] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { _id } = useParams()
 

useEffect(() => {  
    
    let get = async () => {
    setIsLoading(true)
    const resto = await listRestoID(_id) 
    setRestoProfile(resto.data)
    setIsLoading(false)
  }
    
    get()

  return () => get = () => {
  }
  
}, [_id])

//const likes = restoProfile.map(item => item.userlike)

  
 const likes = [restoProfile.userlike]
 console.log(likes)

 


    return (
        <>                  
                <Container>
                {isLoading
                ? <Loading/>                
                : <> 
                <TopTitle title={restoProfile.nome} subtitle={restoProfile.instagram}/>
                <TableRating responsive="sm">
                <thead>
                  <tr>                    
                    <th>LIKES</th>
                    <th>DISLIKES</th>
                  </tr>
                </thead>                
                <tbody>
                    
                {likes.map((likes, i) => (
                <tr key={i}>
                  <td>{likes}</td>
                </tr>
                ))}
                   
                  
                                 
                
              </tbody>               
                </TableRating>
                </>
                
               
              }
                </Container>
                
            
           
        </>
    )
}



export default PerfilRestaurante

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
  
.swal2-header {
  background: #000;
}
}
`