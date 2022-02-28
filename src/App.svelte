<script lang="ts">
  import "smelte/src/tailwind.css";
  import { onMount } from "svelte";
  import { onAuthStateChanged } from "firebase/auth";

  import Button from "smelte/src/components/Button";

  // Vars
  let userId: string = "";

  // Local imports
  import { auth } from "$lib/auth";

  // Register an event handler when user logs in or logs out
  onAuthStateChanged(auth, handleAuthStateChanged);

  const onUserLogin = (user) => {
    console.log("User logged in", user);
    userId = user.uid;
  };

  const onUserLogout = () => {
    console.log("User logged out");
  };

  function handleAuthStateChanged(user) {
    if (user) onUserLogin(user);
    else onUserLogout();
  }

  onMount(async () => {});
</script>

<main>
  <p>User: {userId}</p>
  <Button>Hello!</Button>
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
