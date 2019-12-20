import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCN53vLghgUjpX_8utz8XefcdzO-mr06UM",
    authDomain: "clothes-store-efcf8.firebaseapp.com",
    databaseURL: "https://clothes-store-efcf8.firebaseio.com",
    projectId: "clothes-store-efcf8",
    storageBucket: "clothes-store-efcf8.appspot.com",
    messagingSenderId: "776451956309",
    appId: "1:776451956309:web:f6374463faf6a9dd557edc",
    measurementId: "G-1DCYY58EW2"

};

const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;