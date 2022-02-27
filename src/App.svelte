<script lang="ts">
  export let name: string;

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { onMount } from "svelte";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDubRkKwQQeamXRP8e--lFqNIelyASzLdI",
    authDomain: "hypr-5cca0.firebaseapp.com",
    projectId: "hypr-5cca0",
    storageBucket: "hypr-5cca0.appspot.com",
    messagingSenderId: "802058251534",
    appId: "1:802058251534:web:7ccaac802197e2bd48bb5f",
    measurementId: "G-6241W2BCWK",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getCities(db) {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, "phocks@gmail.com", "Password21!")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

  onMount(async () => {
    // console.log(await getCities(db));
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
