import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./router/AppLayout";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Authors from "./pages/Authors/Authors";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
