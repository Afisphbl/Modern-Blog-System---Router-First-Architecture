import React from "react";
import "./EditPost.css";
import PostForm from "../../components/PostForm/PostForm";
import { deletePost, getPostById, updatePost } from "../../api/postsApi";
import { Form, redirect, useLoaderData } from "react-router-dom";

function EditPost() {
  const post = useLoaderData();
  return (
    <div className="edit-post-container">
      <div className="post-form-container">
        <h3 className="post-form-title">Edit Post</h3>

        <Form method="POST" className="post-form">
          <div className="form-group">
            <label htmlFor="post-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="post-title"
              name="title"
              className="form-input"
              placeholder="Enter post title"
              required
              title="Please fill out this filled"
              defaultValue={post.title}
            />
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="post-category" className="form-label">
                Category
              </label>
              <select
                id="post-category"
                name="category"
                className="form-input"
                required
                title="Please fill out this filled"
                defaultValue={post.category}
              >
                <option value="">Select category</option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="design">Design</option>
                <option value="career">Career</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="post-image-url" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="form-input"
                placeholder="https://example.com/image.jpg"
                defaultValue={post.image}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="post-content" className="form-label">
              Content
            </label>
            <textarea
              id="post-content"
              name="content"
              className="form-input form-textarea"
              placeholder="Write your post content here..."
              required
              title="Please fill out this filled"
              defaultValue={post.content}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="form-btn-submit">
              Save Post
            </button>
            <button type="reset" className="form-btn-cancel">
              Cancel
            </button>
          </div>
        </Form>
      </div>
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
