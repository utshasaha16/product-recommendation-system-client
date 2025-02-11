import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./context/AuthContext/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="container mx-auto bg-[#e8edef]">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
