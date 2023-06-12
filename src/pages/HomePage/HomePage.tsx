import React from "react";
import { Paper } from "@/components/ui/Paper";
import { Profile } from "@/components/HomePage/Profile";
import styles from "./home-page.module.scss"

interface HomePageProps {

}

export const HomePage = (props: HomePageProps) => {
  return (
    <Paper>
      <Profile />
    </Paper>
  );
};
