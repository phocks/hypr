<script lang="ts">
  export let params: any = {};
  import { auth } from "$lib/auth";

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  let email: string;
  let password: string;

  function handleSubmit(event: Event) {
    console.log(event);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
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
