import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./router/AppLayout";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import Posts, { loader as postsLoader } from "./pages/Posts/Posts";
import Authors, { loader as authorLoader } from "./pages/Authors/Author";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import PostDetail, {
  loader as postLoader,
  action as deleteAction,
} from "./pages/PostDetail/PostDetail";
import CreatePost, {
  action as createPostAction,
} from "./pages/CreatePost/CreatePost";
import EditPost, {
  loader as editPostLoader,
  action as editPostAction,
} from "./pages/EditPost/EditPost";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
        loader: postLoader,
        action: deleteAction,
        errorElement: <ErrorMessage />,
      },
      {
        path: `/posts/:postId/edit`,
        element: <EditPost />,
        errorElement: <ErrorMessage />,
        loader: editPostLoader,
        action: editPostAction,
      },
      {
        path: "posts/new",
        element: <CreatePost />,
        action: createPostAction,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/authors/:authorId",
        element: <Authors />,
        loader: authorLoader,
        errorElement: <ErrorMessage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  );
}

export default App;
