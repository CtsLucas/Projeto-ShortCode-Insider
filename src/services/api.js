import axios from 'axios'

export const key = "7c67846b3c0102667ac053a6a1fc3b1714169a27"

const api = axios.create({
  baseURL:'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;



