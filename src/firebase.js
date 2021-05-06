// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVM5mzVGmZJr7Q3pQ5cg8xJ33EXIYhV3Q",
    authDomain: "chat-application-7cf65.firebaseapp.com",
    projectId: "chat-application-7cf65",
    storageBucket: "chat-application-7cf65.appspot.com",
    messagingSenderId: "531688209581",
    appId: "1:531688209581:web:4c14e49cd55f1957bc9a24",
    measurementId: "G-7VW304GW70"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;