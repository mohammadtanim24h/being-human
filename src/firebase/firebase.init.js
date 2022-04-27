import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz5-wbL_TC5LO4weyPJlRGLFkeNANmiAA",
  authDomain: "being-human-803f9.firebaseapp.com",
  projectId: "being-human-803f9",
  storageBucket: "being-human-803f9.appspot.com",
  messagingSenderId: "423848617274",
  appId: "1:423848617274:web:7645aa7b99f328b09d9c03"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;