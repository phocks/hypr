<script lang="ts">
  import { push } from "svelte-spa-router";
  import to from "await-to-js";
  export let params: any = {};
  params;

  import { auth } from "$lib/auth";
  import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
  import { loggedInUser } from "$lib/stores";

  let email: string;
  let password: string;

  async function handleSubmit(event: Event) {
    const [error, userCredential] = await to(
      signInWithEmailAndPassword(auth, email, password)
    );

    if (error) {
      console.error(error);
      return;
    }

    const { user } = userCredential;
  }

  $: if ($loggedInUser) push("/");
</script>

<main>
  <center>
    <div class="login-container">
      <form on:submit|preventDefault={handleSubmit}>
        <input bind:value={email} />
        <input bind:value={password} type="password" />
        <button type="submit">login</button>
      </form>
    </div></center
  >
</main>

<style lang="scss">
  input {
    display: block;
  }

  .login-container {
    max-width: 200px;
    text-align: left;
  }
</style>
