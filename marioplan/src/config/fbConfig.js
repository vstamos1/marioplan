import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  
    apiKey: process.env.REACT_APP_SECRET,
    authDomain: "ckurb-7ea64.firebaseapp.com",
    databaseURL: "https://ckurb-7ea64.firebaseio.com",
    projectId: "ckurb-7ea64",
    storageBucket: "ckurb-7ea64.appspot.com",
    messagingSenderId: "1816585538",
    appId: "1:1816585538:web:e7d175fc47b8385d6394db"
  
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 