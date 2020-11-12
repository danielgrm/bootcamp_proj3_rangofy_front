import http from '../config/http'

const authentication = (data) => http.post('/login', data)

export {
    authentication
}
