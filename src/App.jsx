import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./router/AppLayout";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Authors from "./pages/Authors/Authors";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

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
      },
      {
        path: "/authors",
        element: <Authors />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
