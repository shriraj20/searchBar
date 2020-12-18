import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD9k7O7nkCj8yqzgUGQLEWMmv-LGiP0u4Y",
    authDomain: "coding-class-69738.firebaseapp.com",
    databaseURL: "https://coding-class-69738.firebaseio.com",
    projectId: "coding-class-69738",
    storageBucket: "coding-class-69738.appspot.com",
    messagingSenderId: "249875064942",
    appId: "1:249875064942:web:8299f4b61a896c52959e7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();