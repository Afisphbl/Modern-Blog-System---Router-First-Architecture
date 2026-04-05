import React from "react";
import "./PostForm.css";
import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Loader } from "lucide-react";

function PostForm({ pageHead = "Create New Post", authorName = true }) {
  const post = useLoaderData();
  const { state } = useNavigation();
  const navigate = useNavigate();
  return (
    <div className="post-form-container">
      <h3 className="post-form-title">{pageHead}</h3>

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
            defaultValue={post?.title || ""}
          />
        </div>

        <div className="form-group form-grid">
          {authorName && (
            <div>
              <label htmlFor="post-author-name" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                id="post-author-name"
                name="author"
                className="form-input"
                placeholder="John Doe"
                required
                title="Please fill out this filled"
              />
            </div>
          )}

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
              defaultValue={String(post?.category ?? "").toLowerCase()}
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
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="form-input"
              placeholder="https://example.com/image.jpg"
              defaultValue={post?.image || ""}
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
            defaultValue={post?.content || ""}
          ></textarea>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="form-btn-submit"
            disabled={state === "loading"}
          >
            {state === "loading" && (
              <Loader size={16} className="form-btn-spinner" />
            )}
            {state === "loading" ? "Submitting..." : "Submit Post"}
          </button>
          <button
            type="button"
            className="form-btn-cancel"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

export default PostForm;
