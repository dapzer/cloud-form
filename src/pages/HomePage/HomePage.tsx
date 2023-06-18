import React from "react";
import { Paper } from "@/components/ui/Paper";
import { Profile } from "@/components/HomePage/Profile";
import styles from "./home-page.module.scss"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

interface HomePageProps {

}

export const HomePage = (props: HomePageProps) => {
  return (
    <Paper>
      <Profile />

      <Link to={'/profile-description-form'}>
        <Button className={styles.startBtn} id={'button-start'}>
          Начать
        </Button>
      </Link>
    </Paper>
  );
};
