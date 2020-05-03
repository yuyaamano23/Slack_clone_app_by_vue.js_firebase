import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyBAcGmGAOj1jGoH6gKNhlrVnTWBjAk_eEc",
   authDomain: "slack-clone-app-b8751.firebaseapp.com",
   databaseURL: "https://slack-clone-app-b8751.firebaseio.com",
   projectId: "slack-clone-app-b8751",
   storageBucket: "slack-clone-app-b8751.appspot.com",
   messagingSenderId: "16285260333"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}