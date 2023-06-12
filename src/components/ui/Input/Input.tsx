import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./input.module.scss"
import { Field } from "@/components/ui/Field";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef(function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { className, label, error, ...rest } = props;

  return (
    <Field label={label} error={error}>
      <input
        className={clsx(styles.body, {
          [className as string]: className,
        })}
        ref={ref}
        {...rest}
      />
    </Field>
  );
});
