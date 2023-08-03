import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVfAEKNZOqTmhh6U7BpDhQLukQuaI4q5Y",
    authDomain: "utnfinal-934fa.firebaseapp.com",
    projectId: "utnfinal-934fa",
    storageBucket: "utnfinal-934fa.appspot.com",
    messagingSenderId: "807613348305",
    appId: "1:807613348305:web:7d49bedb95e328cb2548f0"
  };

firebase.initializeApp(firebaseConfig)
firebase.auth=firebase.auth()
firebase.db=firebase.firestore()
export default firebase