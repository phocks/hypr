<script lang="ts">
  import { onMount } from "svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import Router, { link } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  import Home from "./routes/Home.svelte";



  // Vars
  let userId: string = "";

  // Local imports
  import { auth } from "$lib/auth";

  const routes = {
    // Exact path
    "/": Home,

    "/:username": wrap({
      asyncComponent: () => import("./routes/Username.svelte"),
    }),

    // Using named parameters, with last being optional
    // "/author/:first/:last?": Author,

    // Wildcard parameter
    // "/book/*": Book,

    // Catch-all
    // This is optional, but if present it must be the last
    // "*": ,
  };

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

<Router {routes} />

<style>
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
