import axios from 'axios'
import { getToken } from './auth'

const localUrlApi = 'https://ancient-citadel-94738.herokuapp.com'
//'http://localhost:3001'

const http = axios.create({
    baseURL: process.env.NODE_ENV ==='development'
    ? localUrlApi
    : process.env.REACT_APP_API
})


http.defaults.headers['Content-type'] = 'application/json'

if (getToken()) {
    http.defaults.headers["x-auth-token"] = getToken()
}



export default http