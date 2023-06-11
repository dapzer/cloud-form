import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/index.tsx";
import { Layout } from "@/components/Layout";

interface RouterProps {
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/registration",
    element: <HomePage/>,
  },
]);

export const Router = (props: RouterProps) => {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  );
};
