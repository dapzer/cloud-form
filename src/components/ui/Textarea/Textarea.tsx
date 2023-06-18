import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./textarea.module.scss";
import { Field } from "@/components/ui/Field";
import { Typography } from "@/components/ui/Typography";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
  currentLength?: number;
  showCurrentLength?: boolean;
}

export const Textarea = React.forwardRef(function Textarea(props: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  const { className, label, error, currentLength, showCurrentLength, ...rest } = props;

  return (
    <Field label={label} error={error}>
      <div className={styles.wrapper}>
        <textarea
          className={clsx(styles.body, {
            [className as string]: className,
          })}
          ref={ref}
          {...rest}
        />
        {showCurrentLength && <Typography className={clsx(styles.currentLength, { [styles.currentLengthError]: error})} as="span"
                                          variant="textSmall">Символов: {currentLength}</Typography>}
      </div>
      {/*<textarea*/}
      {/*  className={clsx(styles.body, {*/}
      {/*    [className as string]: className,*/}
      {/*  })}*/}
      {/*  ref={ref}*/}
      {/*  {...rest}*/}
      {/*/>*/}
    </Field>
  );
});
