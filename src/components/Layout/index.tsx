import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <main>
      {children}
    </main>
  );
};
