import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCiLFRtrePM8xtIMw9MrhHI1kIQ0_c6IC8",
  authDomain: "todoapp-27324.firebaseapp.com",
  projectId: "todoapp-27324",
  storageBucket: "todoapp-27324.appspot.com",
  messagingSenderId: "221338550883",
  appId: "1:221338550883:web:6791cc17fb718016c6ee56"
}

class Fire {
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {

      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(error => { });
      }
    })

  }
}

export default Fire;