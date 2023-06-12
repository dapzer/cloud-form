import React, { ReactElement } from "react";
import { Typography } from "@/components/ui/Typography";
import styles from "./field.module.scss"

interface FieldProps {
  children: ReactElement<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  error?: string;
}

export const Field = (props: FieldProps) => {
  const { children, label, error } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label && (
          <Typography as="p" variant="text">
            {label}
          </Typography>
        )}

        {children}
      </label>

      {!!error?.length && (
        <Typography variant="textSmall">
          {error}
        </Typography>
      )}
    </div>
  );
};
