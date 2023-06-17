import React from "react";
import styles from "./paper.module.scss";
import clsx from "clsx";

interface PaperProps {
  children: React.ReactNode;
  formWrapper?: boolean;
}

export const Paper = (props: PaperProps) => {
  const { children, formWrapper = false } = props;

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.body, { [styles.formWrapper]: formWrapper })}>
        {children}
      </div>
    </div>

  );
};
