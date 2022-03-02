<script lang="ts">
  import { onMount } from "svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import Router, { link, location } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import NotFound from "./routes/NotFound.svelte";

  import Home from "./routes/Home.svelte";

  import { auth } from "$lib/auth";

  const routes = {
    "/": Home,

    "/user/:username": wrap({
      asyncComponent: () => import("./routes/Username.svelte"),
    }),

    // Using named parameters, with last being optional
    // "/author/:first/:last?": Author,

    // Wildcard parameter
    // "/book/*": Book,

    // Catch-all
    // This is optional, but if present it must be the last
    "*": NotFound,
  };

  // Register an event handler when user logs in or logs out
  onAuthStateChanged(auth, handleAuthStateChanged);

  const onUserLogin = (user) => {
    console.log("User logged in", user);
  };

  const onUserLogout = () => {
    console.log("User logged out");
  };

  function handleAuthStateChanged(user) {
    if (user) onUserLogin(user);
    else onUserLogout();
  }

  onMount(async () => {});

  $: console.log($location);
</script>

<main>
  <nav>
    <a href="/" use:link>Home</a> - <a href="/user/phocks" use:link>User</a>
  </nav>
  <Router {routes} />
</main>

<style>
  main {
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }  */
</style>
