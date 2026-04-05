import { getPosts } from "../../api/postsApi";

export async function postsLoader({ request }) {
  const requestUrl = new URL(request.url);
  const selectedCategory = (
    requestUrl.searchParams.get("category") || "all"
  ).toLowerCase();
  const searchQuery = (requestUrl.searchParams.get("q") || "")
    .toLowerCase()
    .trim();
  const posts = await getPosts();

  let filteredPosts = posts;

  if (selectedCategory !== "all") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category?.toLowerCase() === selectedCategory,
    );
  }

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title?.toLowerCase().includes(searchQuery) ||
        post.content?.toLowerCase().includes(searchQuery) ||
        post.author?.toLowerCase().includes(searchQuery),
    );
  }

  return filteredPosts;
}
