import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IntroRight from "./components/IntroRight";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/contact",
    element:<ContactPage/>
  },
  {
    path:"/nandini",
    element:<IntroRight/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
