import firebase from 'firebase';

import firebaseConfig from '../apiKeys.json';

import constants from '../data/constants.json';

const firebaseApp = () => {
  firebase.initializeApp(firebaseConfig.firebaseKeys);
};

export default firebaseApp;

