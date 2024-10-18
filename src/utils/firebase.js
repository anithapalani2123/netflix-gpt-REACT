// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq3tOOsoM00nTjTUkw0EI95nwmNDO6oQ0",
  authDomain: "netflixgpt-cf387.firebaseapp.com",
  projectId: "netflixgpt-cf387",
  storageBucket: "netflixgpt-cf387.appspot.com",
  messagingSenderId: "687467540247",
  appId: "1:687467540247:web:fa6fc6cfaa77b3c89a5152",
  measurementId: "G-KZP9YWQHCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);