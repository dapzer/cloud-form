import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";

interface RouterProps {
}

const router = createBrowserRouter([
  {
    path: "/",
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
