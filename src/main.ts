import { firebaseApp } from "$lib/firebase";
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {},
});

export default app;
