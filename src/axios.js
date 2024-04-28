import axios from 'axios'
import { BaseUrl } from './Components/Constants/Constant'
const instance = axios.create({
    baseURL:BaseUrl,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjAyNzZjYzg4ZDQ0MGU2OGI0ZWE0ZDg0OTM0MmVhMiIsInN1YiI6IjY2MmI4NjBkNWMwNzFiMDExZjVlYWEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.otl2B8AXSIpMcQo45GcgJj5UQSslcHGTFpK2ZmJMp6c'
      }
})
export default instance