import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewDriver from "./components/newDriver.tsx";
// import editDriver from "./components/editDriver.tsx";
import EditDriver from "./components/editDriver.tsx";
import { clickedObj } from "./components/driverCard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register-driver",
    element: <NewDriver />,
  },
  {
    path: "edit-driver",
    element: (
      <EditDriver
        pictureUrl={clickedObj.pictureUrl}
        codemeli={clickedObj.codemeli}
        name={clickedObj.name}
        lastName={clickedObj.lastName}
        phoneNumber={clickedObj.birthdayDate}
        city={clickedObj.city}
        gender={clickedObj.gender}
        status={clickedObj.status}
      />
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
