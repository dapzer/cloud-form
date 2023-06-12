import React from "react";
import styles from "./paper.module.scss"

interface PaperProps {
  children: React.ReactNode;
}

export const Paper = (props: PaperProps) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        {children}
      </div>
    </div>

  );
};
