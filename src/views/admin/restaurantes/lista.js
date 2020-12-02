import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { listResto } from '../../../services/admin'
import { Table, Container } from 'react-bootstrap'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { ImEye } from 'react-icons/im'
import { deleteRestoID } from '../../../services/admin'
import Swal from 'sweetalert2'
import history from '../../../config/history'


import Loading from '../../../components/layout/loading'

const ListaRestaurantes = (props) => {

  const [restoList, setRestoList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdate, setUpdate] = useState(false)

  useEffect(() => {
    setUpdate(false)
    let get = async () => {
      setIsLoading(true)
      const resto = await listResto()
      setRestoList(resto.data)
      setIsLoading(false)
    }

    if (!isUpdate) {
      get()
    }

    return () => get = () => {
    }

  }, [isUpdate])

  const deleteResto = async (rest) => {
    const message = (type, message) => Swal.fire({
      position: 'center',
      //icon: type || 'success',
      title: message || `Categoria excluída com sucesso.`,
      showConfirmButton: false,
      timer: 2500
    })

    Swal.fire({
      title: `Deseja exluir o restaurante ${rest.nome} ?`,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRestoID(rest._id)
          .then(() => {
            setUpdate(true)
            message('success', `Restaurante ${rest.nome} excluído com sucesso.`)
          })
          .catch(() => message('danger', `Erro ao excluir o restaurante`))
      }
    })
  }



  const sortByName = restoList.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1
    }
    if (a.nome < b.nome) {
      return -1
    }
    return 0
  })


  const restoProfile = (rest) => history.push(`restaurantes/${rest._id}`)


  return (
    <>

      <Container>
        {isLoading
          ? <Loading />
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
                  <td>{rest.userlike.length}</td>
                  <td>{rest.userdislike.length}</td>
                  <td> <ImEye className="icon" onClick={() => restoProfile(rest)} /> <BiEditAlt className="icon" onClick={() => props.updateResto(rest)} /> <BiTrash className="icon" onClick={() => deleteResto(rest)} /> </td>

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
  
.swal2-header {
  background: #000;
}
}
`