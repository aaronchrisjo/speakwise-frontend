import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { User } from "./User";
import { Mentor } from "./Mentor";
import { About } from "./About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/mentor",
    element: <Mentor />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
