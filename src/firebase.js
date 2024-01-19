import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZBXE48Kb01-7QLoUFyEccAkASTFWz0YQ",
  authDomain: "linkedin-8f62c.firebaseapp.com",
  projectId: "linkedin-8f62c",
  storageBucket: "linkedin-8f62c.appspot.com",
  messagingSenderId: "960852565169",
  appId: "1:960852565169:web:bc68ba45bef86038e95690"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
























// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';


// const firebaseConfig = {
//     apiKey: "AIzaSyBg-ZbiC4i_GMfjLNDm87f0BpKQWqwjfx8",
//     authDomain: "linkedin-my.firebaseapp.com",
//     projectId: "linkedin-my",
//     storageBucket: "linkedin-my.appspot.com",
//     messagingSenderId: "184618497272",
//     appId: "1:184618497272:web:bb12754701ed1f770e370d"
//   };

//   const firebaseApp = initializeApp(firebaseConfig)
//   console.log("Is this working")

//   const db = getFirestore(firebaseApp);

// //   const auth = firebase.auth()

//   export {db}


