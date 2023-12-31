import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProviders";
import ThemeProvider from "./Providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/Route";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
