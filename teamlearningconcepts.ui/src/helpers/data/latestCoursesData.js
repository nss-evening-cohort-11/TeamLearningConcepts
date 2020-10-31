import Axios from 'axios'
import {baseUrl} from '../data/constants.json'

const getLatestCoursesProm = () => new Promise((resolve, reject) => {

  Axios.get(`${baseUrl}/courses`)
    .then(response => {
      console.log("inside the .then in promise")
      let latestCourses = response.data;
      resolve(latestCourses);
    })
    .catch(reject);
});
  
export default { getLatestCoursesProm };
