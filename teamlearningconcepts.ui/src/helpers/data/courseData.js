import axios from 'axios';
import baseUrl from '../data/constants.json';

const getAllCourses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Courses`)
    .then(response => resolve(response.data))
    .catch(reject);
});

const getAllCourseTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/CourseTypes`)
    .then(response => resolve(response.data))
    .catch(reject);
});

export default {getAllCourses, getAllCourseTypes};
