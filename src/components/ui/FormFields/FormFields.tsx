import styles from "./form-fields.module.scss";
import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface FormFieldsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const FormFields = (props: FormFieldsProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.wrapper, {
      [className as string]: className,
    })}
         {...rest}
    >
      {children}
    </div>
  );
};
