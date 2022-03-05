import { initializeApp } from "firebase/app";

// This is OK to be public
const firebaseConfig = {
  apiKey: "AIzaSyDubRkKwQQeamXRP8e--lFqNIelyASzLdI",
  authDomain: "hypr-5cca0.firebaseapp.com",
  projectId: "hypr-5cca0",
  storageBucket: "hypr-5cca0.appspot.com",
  messagingSenderId: "802058251534",
  appId: "1:802058251534:web:7ccaac802197e2bd48bb5f",
  measurementId: "G-6241W2BCWK",
};

export const firebaseApp = initializeApp(firebaseConfig);
