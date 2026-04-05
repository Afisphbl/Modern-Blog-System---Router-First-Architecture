import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./router/AppLayout";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import Posts, { loader as postsLoader } from "./pages/Posts/Posts";
import Authors from "./pages/Authors/Authors";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import PostDetail, {
  loader as postLoader,
} from "./pages/PostDetail/PostDetail";

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
        errorElement: <ErrorMessage />,
      },
      {
        path: "/authors",
        element: <Authors />,
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
