// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3wjdv1Ka0SYMqoyDgr5tb-jUkP-U3nj0",
    authDomain: "fb-clone-957d0.firebaseapp.com",
    databaseURL: "https://fb-clone-957d0.firebaseio.com",
    projectId: "fb-clone-957d0",
    storageBucket: "fb-clone-957d0.appspot.com",
    messagingSenderId: "238881577207",
    appId: "1:238881577207:web:57b2aa6b5b64a138619bf2",
    measurementId: "G-V73FP6JVX4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;