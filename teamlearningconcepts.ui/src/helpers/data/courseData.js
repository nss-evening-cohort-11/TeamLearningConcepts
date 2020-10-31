import axios from 'axios';
import {baseUrl} from './constants.json';

const getAllCoursesByCourseTypeId = (courseTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/courses/allByCourseTypeId/${courseTypeId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getFirstThreeCoursesByCourseTypeId = (courseTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/courses/firstThreeByCourseTypeId/${courseTypeId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const getNumberOfCoursesByCourseTypeId = (courseTypeId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/courses/numberByCourseTypeId/${courseTypeId}`)
    .then(response => {
      resolve(response.data)})
    .catch(reject);
});

const search = (searchValue) => {
  axios.get(`${baseUrl}`/search)
}

export default {getAllCoursesByCourseTypeId, getFirstThreeCoursesByCourseTypeId, getNumberOfCoursesByCourseTypeId};
