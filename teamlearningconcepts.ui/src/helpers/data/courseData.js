import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllCoursesByCourseTypeId = (courseTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/courses/allByCourseTypeId/${courseTypeId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

export default {getAllCoursesByCourseTypeId};
