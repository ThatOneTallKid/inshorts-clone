import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';



var firebaseConfig = {
  apiKey: "AIzaSyBLLdXPW5XhdaYdg4GpHGgWlBEvbNMkzLY",
  authDomain: "inshorts-f31ff.firebaseapp.com",
  projectId: "inshorts-f31ff",
  storageBucket: "inshorts-f31ff.appspot.com",
  messagingSenderId: "123414088422",
  appId: "1:123414088422:web:035ea9b497ebd096550927",
  measurementId: "G-PM8NR588ZC"
};
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);
 var db = fire.firestore();

export default fire;

