<script lang="ts">
  import { getFormData } from "$lib/utils";
  import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";
  import { loggedInUser } from "$lib/stores";

  const db = getFirestore();

  import type { Post } from "$lib/types";

  const onSubmit = async (event: Event) => {
    const formData: Post = getFormData(event);
    console.log(formData);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "urls"), {
      url: formData.url,
      timestamp: serverTimestamp(),
      postedBy: $loggedInUser.uid,
    });
    console.log("Document written with ID: ", docRef.id);
  };
</script>

<div>
  <p>What do you want to share?</p>
  <div class="submit-url-container">
    <form on:submit|preventDefault={onSubmit}>
      <fieldset disabled={$loggedInUser ? false : true}>
        <input
          id="url"
          name="url"
          class="submit-url"
          type="url"
          placeholder="https://"
        /> <button type="submit">Share</button>
      </fieldset>
    </form>
  </div>
</div>

<style lang="scss">
  .submit-url-container {
    width: 100%;
  }

  .submit-url {
    width: 100%;
  }

  fieldset {
    border: none;
    padding: 0;
  }
</style>
