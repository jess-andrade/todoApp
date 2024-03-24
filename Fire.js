import { initializeApp } from 'firebase/app'
import { getFirestore, doc, collection } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'
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
  constructor(callback) {
    this.init(callback)
  }

  init(callback) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    signInAnonymously(auth).then(() => {
      console.log("TESTE:")
      console.log(auth.currentUser.uid)
    })

    getAuth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user)

      } else {
        getAuth()
          .signInAnonymously()
          .catch(error => {
            callback(error)
          });
      }
    })

  }
  getLists(callback) {

    const db = getFirestore();

    let ref = db.collection('users').doc(this.userId).collection('lists')

    this.unsubscribe = ref.onSnapshot(snapshot => {
      lists = []

      snapshot.forEach(doc => {
        lists.push({ id: doc.id, ...doc.data() })
      })
      callback(lists)
    })
  }
  get userId() {
    return getAuth().currentUser.uid
  }
}

export default Fire