import firebase from "firebase/compat/app"; // Use compat to support both v8 and v9
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiimIsPlCLG3vgRQyrE9Qrw9qd1Qwtp6A",
  authDomain: "medicineapp-bb572.firebaseapp.com",
  projectId: "medicineapp-bb572",
  storageBucket: "medicineapp-bb572.appspot.com",
  messagingSenderId: "927389955274",
  appId: "1:927389955274:web:cba83ee93be4db76e33033",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
