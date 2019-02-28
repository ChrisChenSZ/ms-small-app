import axios from './require'
import qs from 'qs'

export default {
    user: {
        getAllUser:() => {
            return axios.get('/users')
        },
        getUser: (id) => {
            return axios.get(`/users/${id}`)
        }
    }
    
}