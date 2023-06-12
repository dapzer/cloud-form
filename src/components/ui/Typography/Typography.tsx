import React from "react";
import clsx from "clsx";
import styles from "./typography.module.scss"

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, "as"> & {
  as?: Element;
};

interface TypographyProps {
  className?: string;
  variant?: "text" | "title" | "link" | "textSmall";
}

export const Typography = <Element extends React.ElementType = React.ElementType>(props: PolymorphicProps<Element, TypographyProps>) => {
  const { as: Component = "p", variant = "text", className, ...rest } = props

  return (
    <Component
      className={clsx({
        [styles.text]: variant == "text",
        [styles.title]: variant == "title",
        [styles.textSmall]: variant == "textSmall",
        [styles.link]: variant == "link",
        [className as string]: className,
      })}
      {...rest}
    />
  );
};
