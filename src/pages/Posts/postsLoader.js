import { getPosts } from "../../api/postsApi";

export async function postsLoader({ request }) {
  const requestUrl = new URL(request.url);
  const selectedCategory = (
    requestUrl.searchParams.get("category") || "all"
  ).toLowerCase();
  const posts = await getPosts();

  if (selectedCategory === "all") {
    return posts;
  }

  return posts.filter(
    (post) => post.category?.toLowerCase() === selectedCategory,
  );
}
