import axios from 'axios'

// "proxy": "https://springboot-backend.herokuapp.com",

const base = 'https://springboot-backend.herokuapp.com'

const GET = '/get';
const POST = '/post';

class UserService {

    addUser(user) {
      console.log(user)
      try {
        axios.post(base + POST, user)
      } catch (error) {
        console.error(error.response.data); 
      }
    }

    getUsers(){
        return axios.get(base + GET);
    }

    getUserInfo(username){
      let url = "/get/" + username;
      return axios.get(base + url);
    }

    deleteUserInfo(username){
      let url = "/delete/" + username;
      return axios.delete(base + url);
    }
    
    async addTicker(ticker, userId) {
      console.log(ticker)
        let url = base + "/" + userId + "/insert?ticker=" + ticker;
        console.log(url)
        try {
            await axios.post(url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
    }

    async deleteTicker(ticker, userId) {
        let url = "/" + userId + "/delete?ticker=" + ticker;
        try {
            await axios.delete(base + url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();