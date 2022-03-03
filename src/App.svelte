<script lang="ts">
  import { onMount } from "svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import Router, { link, location } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  import Home from "./routes/Home.svelte";

  import { auth } from "$lib/auth";

  let currentUser = null;

  const routes = {
    "/": Home,

    "/login": wrap({
      asyncComponent: () => import("./routes/Login.svelte"),
    }),

    "/user/:username": wrap({
      asyncComponent: () => import("./routes/Username.svelte"),
    }),

    // Using named parameters, with last being optional
    // "/author/:first/:last?": Author,

    // Wildcard parameter
    // "/book/*": Book,

    // Catch-all
    // This is optional, but if present it must be the last
    "*": wrap({
      asyncComponent: () => import("./routes/NotFound.svelte"),
    }),
  };

  // Register an event handler when user logs in or logs out
  onAuthStateChanged(auth, handleAuthStateChanged);

  const onUserLogin = (user) => {
    console.log("User logged in");
    currentUser = user;
  };

  const onUserLogout = () => {
    console.log("User logged out");
    currentUser = false;
  };

  function handleAuthStateChanged(user) {
    if (user) onUserLogin(user);
    else onUserLogout();
  }

  onMount(async () => {});

  $: console.log(currentUser);
</script>

<main>
  <nav class="nav">
    <div>
      <span class="brand"><strong><a href="/" use:link>Hypr</a></strong></span>
    </div>
    <div />
    <div>
      {#if currentUser === null}
        <span>Loading...</span>
      {:else if currentUser}
        <span>{currentUser.email}</span>
      {:else}
        <a href="/login" use:link>login</a>
      {/if}
    </div>
  </nav>
  <div class="container"><Router {routes} /></div>
</main>

<style lang="scss">
  main {
    max-width: 600px;
    margin: auto;
    text-align: left;
  }

  .brand {
    a {
      color: black;
    }

    a:hover {
      text-decoration: none;
    }
  }

  .nav {
    height: 3rem;
    border-bottom: 1px solid #f7f7f7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }  */
</style>
