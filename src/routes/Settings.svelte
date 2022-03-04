<script lang="ts">
  import { getAuth, signOut } from "firebase/auth";
  const auth = getAuth();

  export let params: any = {};
  params;

  function handleSignOut() {
    signOut(auth);
  }
</script>

<main><button on:click={handleSignOut}>Sign out</button></main>
