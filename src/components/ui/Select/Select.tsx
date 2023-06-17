import React, { SelectHTMLAttributes } from "react";
import { Field } from "@/components/ui/Field";
import clsx from "clsx";
import styles from "./select.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
}

export const Select = React.forwardRef((props: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
  const { error, label, className, ...rest } = props;

  return (
    <Field error={error} label={label}>
      <select ref={ref} className={clsx(styles.body, { [className as string]: className })} {...rest} />
    </Field>
  );
});
