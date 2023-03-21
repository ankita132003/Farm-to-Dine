import axios from 'axios'


axios.defaults.baseURL = 'http://farmproject.azurewebsites.net/'
axios.defaults.headers.common['Authorization']  = `Bearer ${localStorage.getItem('tocken')}`