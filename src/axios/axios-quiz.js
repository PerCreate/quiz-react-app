import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-ad1a4-default-rtdb.firebaseio.com/'
})