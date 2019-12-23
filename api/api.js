const axios = require('axios')

const api = axios.create({
    baseURL : 'http://34.82.236.4:3000',
    withCredentials : true,
    headers: {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
    }

})

export {api}