import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./textarea.module.scss";
import { Field } from "@/components/ui/Field";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef(function Textarea(props: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  const { className, label, error, ...rest } = props;

  return (
    <Field label={label} error={error}>
      <textarea
        className={clsx(styles.body, {
          [className as string]: className,
        })}
        ref={ref}
        {...rest}
      />
    </Field>
  );
});
