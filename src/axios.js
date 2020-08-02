// axios
import axios from 'axios'

const baseURL = 'https://gservernodejs.herokuapp.com'

export default axios.create({
  baseURL
  // You can add your headers here
})
