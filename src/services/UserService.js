import axios from 'axios'

const USERS_REST_API_URL_GET = '/get';
const USERS_REST_API_URL_POST = '/post';

class UserService {

    addUser(user) {
      try {
        axios.post(USERS_REST_API_URL_POST, user)
      } catch (error) {
        console.error(error.response.data); 
      }
    }

    getUsers(){
        return axios.get(USERS_REST_API_URL_GET);
    }

    getUserInfo(username){
      let url = "/get/" + username;
      return axios.get(url);
    }

    deleteUserInfo(username){
      let url = "/delete/" + username;
      return axios.delete(url);
    }
    
    async addTicker(ticker, userId) {
      console.log(ticker)
        let url = "/" + userId + "/insert?ticker=" + ticker;
        try {
            await axios.post(url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
    }

    async deleteTicker(ticker, userId) {
        let url = "/" + userId + "/delete?ticker=" + ticker;
        try {
            await axios.delete(url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();