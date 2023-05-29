import { PrismaClient } from "@prisma/client";
import type { APIRoute } from 'astro';

const prisma = new PrismaClient();

// OK then, let's get all the posts
async function getAllPosts() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}

export async function get({ params, request }) {
  const allPosts = await getAllPosts();

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const post: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "This was a POST!"
    })
  }
}