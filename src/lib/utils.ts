import type { Post } from "$lib/types";

export function getFormData(event): Post {
  const formData = new FormData(event.target);

  const data = { url: "string" };
  for (let [key, value] of formData) {
    data[key] = value;
  }

  return data;
}
