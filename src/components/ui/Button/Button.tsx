import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "clear";
}

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", type = "button", ...rest } = props;

  return (
    <button
      type={type}
      className={clsx(styles.body, {
        [className as string]: className,
        [styles.primary]: variant === "primary",
        [styles.outline]: variant === "outline",
        [styles.clear]: variant === "clear",
      })}
      {...rest} />
  );
};
