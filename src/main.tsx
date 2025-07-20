import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Curriculum from "@/pages/Curriculum";
import SampleContent from "@/pages/SampleContent";
import Demo from "@/pages/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/curriculum",
    element: <Curriculum />,
  },
        {
          path: "/sample-content",
          element: <SampleContent />,
        },
        {
          path: "/demo",
          element: <Demo />,
        },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
