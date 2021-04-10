import firebase from 'firebase';

  const firebaseConfig = {
    apiKey:"AIzaSyABH3hHQOrmYDIAf1KmFUs2QOtMKiB2QdY",
    authDomain:"sourabhresume-268de.firebaseapp.com",
    databaseURL:"https://sourabhresume-268de-default-rtdb.firebaseio.com",
    projectId:"sourabhresume-268de",
    storageBucket:"sourabhresume-268de.appspot.com",
    messagingSenderId:"1059240331756",
    appId:"1:1059240331756:web:903a25398ad8c0d80d98c9",
    measurementId:"G-NZVTNGW8GP"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  export const db = fire.database();
  firebase.analytics();

  export default fire;