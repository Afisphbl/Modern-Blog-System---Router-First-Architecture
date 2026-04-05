import React from "react";
import "./CreatePost.css";
import PostForm from "../../components/PostForm/PostForm";
import { sendPost } from "../../api/postsApi";
import { redirect } from "react-router-dom";
import { sendAuthor } from "../../api/authorsApi";

function CreatePost() {
  return (
    <div className="create-post-container">
      <PostForm />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const random = Math.floor(Math.random() * 100);
  const newDataPost = {
    ...data,
    image: data.image ?? `https://picsum.photos/400/200?random=${random}`,
    date: new Date().toLocaleDateString(),
  };

  const newDataAuthor = {
    id: data.id,
    name: data.author,
    bio: data.content,
  };

  const newAuthor = await sendAuthor(newDataAuthor);
  const newPost = await sendPost({ ...newDataPost, authorId: newAuthor.id });
  return redirect(`/posts/${newPost.id}`);
}

export default CreatePost;
