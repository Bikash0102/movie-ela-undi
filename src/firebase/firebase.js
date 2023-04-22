
import { initializeApp } from "firebase/app";
import { getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ8aTCVtr4-XZ2rqW9rStaRUI3UcYkwxQ",
  authDomain: "movieelaundi.firebaseapp.com",
  projectId: "movieelaundi",
  storageBucket: "movieelaundi.appspot.com",
  messagingSenderId: "118513324533",
  appId: "1:118513324533:web:6c0cc8935358e985a750bc"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const movie=collection(db,"movies");
export const reviewsRef=collection(db,"reviews")
export const usersRef=collection(db,"users")
export default app;