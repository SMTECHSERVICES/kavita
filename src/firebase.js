import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxGsYF13QyXz_PNS0PEWIV7lGt8s4-6DM",
  authDomain: "sahityadarpanshala.firebaseapp.com",
  projectId: "sahityadarpanshala",
  storageBucket: "sahityadarpanshala.firebasestorage.app",
  messagingSenderId: "835105586163",
  appId: "1:835105586163:web:036d9a41d8a6381bf67086"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


