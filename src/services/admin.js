import http from '../config/http'



// POST user
const addUser= (data) => http.post(`/admin/user`, data)
// GET user
const getUser= () => http.get(`/admin/user`)

// GET resto
const listResto = () => http.get(`/admin/resto`)

// POST resto
const cadastrarResto = (data) => http.post(`/admin/resto`, data)

// GET by id
const showCategory = (id) => http.get(`/category/${id}`)
// UPDATE
const updateCategory = (id, data) => http.patch(`/category/${id}`, data)



export {
    addUser,
    getUser,
    listResto,
    showCategory,
    updateCategory,
    cadastrarResto
}
