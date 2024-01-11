import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBeTRTDlY0yfRG9dRA93hx6xZQU9SXnbMk",
  authDomain: "therasi-1cc8d.firebaseapp.com",
  databaseURL:
    "https://therasi-1cc8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "therasi-1cc8d",
  storageBucket: "therasi-1cc8d.appspot.com",
  messagingSenderId: "923154003557",
  appId: "1:923154003557:web:a3f535f322cc4cbf9cf88c",
};

export const app = initializeApp(firebaseConfig);
