import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getUser } from '../../../services/admin'
import { Table, Container } from 'react-bootstrap'
import TopTitle from '../../../components/layout/title'
import { BiTrash } from 'react-icons/bi'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { deleteUserID } from '../../../services/admin'
import Swal from 'sweetalert2'


import Loading from '../../../components/layout/loading'

const ListaUsers = () => {

  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdate, setUpdate] = useState(false)

  useEffect(() => {
    setUpdate(false)
    let get = async () => {
      setIsLoading(true)
      const user = await getUser()
      setUserList(user.data)
      setIsLoading(false)
    }

    if (!isUpdate) {
      get()
    }

    return () => get = () => {
    }

  }, [isUpdate])


  const deleteUser = async (user) => {
    const message = (type, message) => Swal.fire({
      position: 'center',
      //icon: type || 'success',
      title: message || `Usuário excluído com sucesso.`,
      showConfirmButton: false,
      timer: 2500
    })

    Swal.fire({
      title: `Deseja exluir o usuário ${user.nome} ?`,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserID(user._id)
          .then(() => {
            setUpdate(true)
            message('success', `Usuário ${user.nome} excluído com sucesso.`)
          })
          .catch(() => message('danger', `Erro ao excluir o usuário`))
      }
    })
  }


  const sortByName = userList.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1
    }
    if (a.nome < b.nome) {
      return -1
    }
    return 0
  })





  return (


    <Container>
      {isLoading
        ? <Loading />
        : <>
          <TopTitle title="Lista de usuários" />
          <TableRating responsive="sm">
            <thead>
              <tr>

                <th>NOME</th>
                <th>E-MAIL</th>
                <th>ADMIN</th>
                <th>AÇÕES</th>


              </tr>
            </thead>

            <tbody>
              {sortByName.map((user, i) => (
                <tr key={i}>

                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.isadmin ? <FaCheckCircle /> : <FaTimesCircle />}</td>
                  <td> <BiTrash className="icon" onClick={() => deleteUser(user)} /> </td>

                </tr>

              ))}



            </tbody>


          </TableRating>
        </>
      }
    </Container>




  )
}




export default ListaUsers

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