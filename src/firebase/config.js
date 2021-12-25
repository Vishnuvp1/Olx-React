import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhOCLHTeyz55JQcWzG-vksOddseLaVy_A",
  authDomain: "fir-88f92.firebaseapp.com",
  projectId: "fir-88f92",
  storageBucket: "fir-88f92.appspot.com",
  messagingSenderId: "961756398135",
  appId: "1:961756398135:web:dcd37432f3118826db75b2",
  measurementId: "G-YSD3XS5B9S"
};

  export default firebase.initializeApp(firebaseConfig)