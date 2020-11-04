import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllCourseTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/CourseTypes`)
    .then(response => resolve(response.data))
    .catch(reject);
});

const getSingleCourseType = (courseTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/CourseTypes/${courseTypeId}`)
    .then(response => resolve(response.data))
    .catch(reject);
});

export default {getAllCourseTypes, getSingleCourseType};
