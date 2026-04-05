import React from "react";
import "./EditPost.css";
import PostForm from "../../components/PostForm/PostForm";
import { getPostById, updatePost } from "../../api/postsApi";
import { redirect } from "react-router-dom";

function EditPost() {
  return (
    <div className="edit-post-container">
      <PostForm pageHead="Edit post" authorName={false} />
    </div>
  );
}

export async function loader({ params }) {
  const { postId } = params;

  const data = await getPostById(postId);

  return data;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { postId } = params;
  const data = Object.fromEntries(formData);

  await updatePost({ ...data, id: postId });

  return redirect(`/posts/${postId}`);
}

export default EditPost;
