import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Posts.css";
import "../../components/PostList/PostList.css";
import { useLoaderData } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import { getPosts } from "../../api/postsApi";

function Posts() {
  const posts = useLoaderData();

  return (
    <div className="container posts-container">
      <div className="posts-header">
        <h1 className="posts-title">All Posts</h1>
        <p className="posts-subtitle">
          Discover stories, thinking, and expertise.
        </p>

        <div className="posts-filters">
          <div className="posts-filter-categories">
            <CategoryFilter />
          </div>

          <div className="posts-filter-search">
            <SearchBar />
          </div>
        </div>
      </div>

      {posts.length ? (
        <div className="post-list-grid">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No posts found"
          message="Try adjusting your search or filter to find what you're looking for."
        />
      )}
    </div>
  );
}

export async function loader({ request }) {
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

export default Posts;
