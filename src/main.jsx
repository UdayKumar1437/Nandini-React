import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IntroRight from "./components/IntroRight";
import BaseLayout from "./Layouts/BaseLayout";
import RecipeCard from "./components/RecipeCard";
import SecondLayout from "./Layouts/SecondLayout";
import YouTubeLayout from "./Layouts/YouTubeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <YouTubeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/nandini",
    element: <YouTubeLayout />,
    children:[
      {
        path:"",
        element:<IntroRight/>
      }
    ]
  },
  {
    path: "/uday",
    element: <SecondLayout />,
    children: [{ path: "nandini" ,element:<h1>Nandini</h1>}],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
