import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { FormPage } from "@/pages/FormPage";

interface RouterProps {
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/form",
    element: <FormPage/>
  }
]);

export const Router = (props: RouterProps) => {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  );
};
