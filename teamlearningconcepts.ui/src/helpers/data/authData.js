import firebase from 'firebase';
import axios from 'axios';
import {baseUrl} from '../data/constants.json';

// interceptors work by changing the outbound request before the xhr is sent 
// or by changing the response before it's returned to our .then() method.
axios.interceptors.request.use(function (request) {
  const token = sessionStorage.getItem('token');

  if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, function (err) {
  return Promise.reject(err);
});

const registerUser = (user) => {
console.log(user)
  //sub out whatever auth method firebase provides that you want to use.
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(cred => {
console.log(user, "second")
console.log(cred.user.email)
    //get email from firebase
    let userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.userName,
      photoUrl: user.photoUrl,
      email: cred.user.email,
      firebaseUID: cred.firebaseUID 
    };

    //get token from firebase
    cred.user.getIdToken()
      //save the token to the session storage
      .then(token => sessionStorage.setItem('token',token))
      //save the user to the the api
      .then(() => axios.post(`${baseUrl}/users`, userInfo));
  });
};

const loginUser = (user) => {
  //sub out whatever auth method firebase provides that you want to use.
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(cred => {
    //get token from firebase
    cred.user.getIdToken()
        //save the token to the session storage
      .then(token => sessionStorage.setItem('token',token));
  });
};

const logoutUser = () => {
  sessionStorage.removeItem('token')
  return firebase.auth().signOut();
};

const getUid = () => {
  return firebase.auth().currentUser.uid;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
getUid, 
loginUser, 
logoutUser, 
registerUser
};