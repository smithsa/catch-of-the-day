import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAQe1-ntlthGGr_QFkGa16YPXA6COra-1o",
    authDomain: "catch-of-the-day-f8861.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-f8861.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

// This is a default export
export default base;
