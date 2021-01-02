import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB54aOxJUD9sLZMhkXKonhkldAueYSpeyE",
  authDomain: "clone-7da2e.firebaseapp.com",
  projectId: "clone-7da2e",
  storageBucket: "clone-7da2e.appspot.com",
  messagingSenderId: "479536378978",
  appId: "1:479536378978:web:db6741e03a8427035b8d3b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
