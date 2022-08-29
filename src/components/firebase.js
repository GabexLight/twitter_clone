import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8eov_jKJbthl3ekqLEICp9jzPJXUEI3k",
  authDomain: "twitter-clone-32d31.firebaseapp.com",
  projectId: "twitter-clone-32d31",
  storageBucket: "twitter-clone-32d31.appspot.com",
  messagingSenderId: "803638250991",
  appId: "1:803638250991:web:32cbf1db8dfa6a9c133a1a",
  measurementId: "G-3DTF14Y6DX"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);  