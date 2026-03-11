import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAot9lQJOkvcP00wBLePl-nclDCoTr-wew",
  authDomain: "skipq-dc1ac.firebaseapp.com",
  databaseURL: "https://skipq-dc1ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "skipq-dc1ac",
  storageBucket: "skipq-dc1ac.firebasestorage.app",
  messagingSenderId: "333677496735",
  appId: "1:333677496735:web:d0e6c676c133743cba95aa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);