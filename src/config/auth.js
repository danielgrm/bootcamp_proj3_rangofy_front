const TOKEN_KEY = 'rangofy'

//const getToken = () => {
//    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
//    if (data && data.token) {
//        return data.token
//    }
//    return false
//}

const getToken = () => localStorage.getItem(TOKEN_KEY)

const getUser = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if (data && data.user) {
        return data.user
    }
    return false
}

const saveToken = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data))


const removeToken = () => localStorage.removeItem(TOKEN_KEY)

const isAuthenticated = () => {

    return getToken() !== null
}

export {
    isAuthenticated,
    getToken,
    getUser,
    saveToken,
    removeToken
}

