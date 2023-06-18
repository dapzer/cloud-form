import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { ProfileDescriptionFormPage } from "@/pages/ProfileDescriptionFormPage";

interface RouterProps {
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/profile-description-form",
    element: <ProfileDescriptionFormPage/>
  }
]);

export const Router = (props: RouterProps) => {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  );
};
