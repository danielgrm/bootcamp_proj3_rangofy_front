import http from '../config/http'



// POST user
const addUser= (data) => http.post(`/admin/user`, data)
// GET user
const getUser= () => http.get(`/admin/user`)

//DELETE user by id
const deleteUserID= (id) => http.delete(`/admin/user/${id}`)

// GET resto
const listResto = () => http.get(`/admin/resto`)

// POST resto
const cadastrarResto = (data) => http.post(`/admin/resto`, data)

//GET resto by id
const listRestoID = (id) => http.get(`/admin/resto/${id}`)

//PATCH resto by id
const updateResto = (id, data) => http.patch(`/admin/resto/${id}`, data)

//DELETE resto by id
const deleteRestoID = (id) => http.delete(`/admin/resto/${id}`)

//POST like by id
const like = (id) => http.post(`/likes/${id}`)

//POST like by id
const dislike = (id) => http.post(`/dislikes/${id}`)





export {
    addUser,
    getUser,
    deleteUserID,
    cadastrarResto,
    listResto,
    listRestoID,
    updateResto,
    deleteRestoID,
    like,
    dislike    
}
