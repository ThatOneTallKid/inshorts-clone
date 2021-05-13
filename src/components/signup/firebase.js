import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';



var firebaseConfig = {
  apiKey: "AIzaSyD6YqdkpS0I-zM4_mrHhvO3S0-UFygY3QQ",
    authDomain: "inshorts-clone-cb39a.firebaseapp.com",
    projectId: "inshorts-clone-cb39a",
    storageBucket: "inshorts-clone-cb39a.appspot.com",
    messagingSenderId: "903292897079",
    appId: "1:903292897079:web:1a3324ad9f77f97f923cb2",
    measurementId: "G-5GNYL9WJHF"
};
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);
 

export default fire;

