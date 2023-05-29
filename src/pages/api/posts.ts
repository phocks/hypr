import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllPosts() {
  // Find all posts
  const allPosts = await prisma.post.findMany();

  return allPosts;
}

export async function get({ params, request }) {
  const allPosts = await getAllPosts();

  return {
    body: JSON.stringify(allPosts),
  };
}
