/**
 * @Description
 * @author  
 * @date  2022/4/21 20:21
 */
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  withCredentials: true,
  timeout: 15000
})

//response interceptor
request.interceptors.response.use(
  response => {
    if (response.status!==200){
      alert("服务器异常")
    }
    if (response.data.status!=="10000"){
      alert(response.data.message)
    }
    return response.data
  }
)

export default request
