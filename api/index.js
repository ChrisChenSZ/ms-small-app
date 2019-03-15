import axios from './require'
import qs from 'qs'

export default {
    code: {
        code (code) {
            return axios.get(`/code/${code}`)
        }
    },
    user: {
        login (data) {
         return axios.post('/login',data)
        },
        getAllUser:() => {
            return axios.get('/users')
        },
        getUser: (id) => {
            return axios.get(`/users/${id}`)
        }
    },
    product: {
        list (params) {
            return axios.get('/product/detail',params)
        },
        details (id) {
            return axios.get(`/product/detail/${id}`)
        }
    }
    
}