import firebase from 'firebase/app'
import 'firebase/database'
//
import {...} from "firebase/database";
import {...} from "firebase/firestore";
import {...} from "firebase/functions";
import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyCiLFRtrePM8xtIMw9MrhHI1kIQ0_c6IC8",
  authDomain: "todoapp-27324.firebaseapp.com",
  projectId: "todoapp-27324",
  storageBucket: "todoapp-27324.appspot.com",
  messagingSenderId: "221338550883",
  appId: "1:221338550883:web:6791cc17fb718016c6ee56"
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig)

}

export default firebase