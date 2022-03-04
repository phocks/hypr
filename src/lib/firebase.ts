import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

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
const db = getFirestore();

const test = async () => {
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
};

test();
