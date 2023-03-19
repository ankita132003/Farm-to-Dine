import axios from 'axios'


axios.defaults.baseURL = 'http://192.168.137.118:5000/'
axios.defaults.headers.common['Authorization']  = `Bearer ${localStorage.getItem('tocken')}`