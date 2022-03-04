<script lang="ts">
  import { push } from "svelte-spa-router";
  export let params: any = {};

  import { auth } from "$lib/auth";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { loggedInUser } from "$lib/stores";

  let email: string;
  let password: string;

  function handleSubmit(event: Event) {
    console.log(event);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
