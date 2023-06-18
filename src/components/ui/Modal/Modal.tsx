import { Portal } from "@/components/ui/Portal";
import { ReactNode, useEffect } from "react";
import styles from "./modal.module.scss";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";
import { Typography } from "@/components/ui/Typography";
import clsx from "clsx";

interface ModalProps {
  children: ReactNode;
  hideCloseBtn?: boolean;
  title?: string;
  handleClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { children, hideCloseBtn, title, handleClose } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    }
  }, []);

  return (
    <Portal>
      <div className={styles.wrapper} onClick={() => !hideCloseBtn && handleClose()}>
        <div className={styles.body} onClick={event => event.stopPropagation()}>
          <div className={clsx(styles.header, { [styles.headerCenter]: hideCloseBtn })}>
            <Typography variant="title">{title}</Typography>
            {!hideCloseBtn && (
              <Button variant="clear" className={styles.closeBtn} onClick={handleClose}>
                <CloseIcon />
              </Button>
            )}
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
};
