import Rebase from 're-base';
import firebase from 'firebase';
import config from './config.js';

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

// This is a default export
export default base;
