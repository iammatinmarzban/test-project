import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import About from "./routes/about.tsx";
import Contact from "./routes/contacts.tsx";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewDriver from "./components/newDriver.tsx";
import EditDriver from "./components/editDriver.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts",
    element: <Contact />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "register-driver",
    element: <NewDriver />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
