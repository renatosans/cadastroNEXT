import axios from 'axios'


const api = null;
/*

'http://' + context.req.headers.host + '/api/products'

const api = axios.create({
    baseURL: 'https://cadastro-produtos-next.vercel.app/api',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})

*/

const notification = {
    message: 'nada consta',
    options: {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined    
    }
}

export { api, notification }
