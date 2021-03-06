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

const search = (searchVals) => new Promise((resolve, reject) =>
{
  axios.get(`${baseUrl}/courses/search/${searchVals}`)
  .then(response => {
    resolve(response.data);
  })
  .catch(reject);
});


const getLatestCourses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/courses/latestCourses`)
  .then(response => {
    resolve(response.data)})
    .catch(reject);
  }
);

const getSingleCourseView = (courseId) => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/courses/singleCourseView/${courseId}`)
  .then(response => {
    resolve(response.data)})
    .catch(reject);
  })

const getCoursesByInvoiceId = (invoiceId) => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/courses/invoice/${invoiceId}`)
  .then(response => {
    resolve(response.data)})
    .catch(reject);
  })


// eslint-disable-next-line import/no-anonymous-default-export
export default {
getAllCoursesByCourseTypeId, 
getFirstThreeCoursesByCourseTypeId, 
getNumberOfCoursesByCourseTypeId, 
getLatestCourses, 
search,
getSingleCourseView,
getCoursesByInvoiceId
};
