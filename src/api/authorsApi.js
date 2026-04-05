const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

export async function getAuthors({ authorId }) {
  try {
    const resAuthor = await fetch(`${BASE_URL}/authors/${authorId}`);
    if (!resAuthor.ok) throw new Error("Something went wrong");

    const data = await resAuthor.json();

    const resPosts = await fetch(`${BASE_URL}/posts?author=${data.name}`);
    if (!resPosts.ok) throw new Error("Something went wrong");

    const posts = await resPosts.json();

    const dataWithPosts = { ...data, posts };
    return dataWithPosts;
  } catch (error) {
    console.error(`Error : ${error}`);
    throw error;
  }
}
