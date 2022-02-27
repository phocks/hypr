<script lang="ts">
  import { onMount } from "svelte";
  import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

  // Local imports
  import { auth } from "$lib/auth";

  const handleAuthStateChanged = async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
    } else {
      // User is signed out
    }
  };

  // Register an event handler
  onAuthStateChanged(auth, handleAuthStateChanged);

  onMount(async () => {
    // const userCredential = await signInWithEmailAndPassword(
    //   auth,
    //   "phocks@gmail.com",
    //   "password"
    // );

    // // Signed in
    // const user = userCredential.user;
  });
</script>

<main>
  <p>Hypr space...</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
