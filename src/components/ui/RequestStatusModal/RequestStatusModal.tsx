import { Modal } from "@/components/ui/Modal/Modal.tsx";
import styles from "./request-status-modal.module.scss";
import { ErrorIcon, SuccessIcon } from "@/components/ui/Icons";
import React from "react";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

interface RequestStatusModalProps {
  success: boolean;
  successTitle?: string;
  successBtnHandler: () => void;
  errorBtnHandler: () => void;
  successBtnText?: string;
  handleClose: () => void;
  successBtnId?: string;
  errorBtnId?: string;
}

export const RequestStatusModal = (props: RequestStatusModalProps) => {
  const { success, successTitle, successBtnHandler, successBtnText, errorBtnHandler, handleClose, successBtnId, errorBtnId } = props;

  return (
    <>
      <Modal title={success ? (successTitle || "Форма успешно отправлена") : "Ошибка"} hideCloseBtn={success}
             handleClose={handleClose}>
        <div className={clsx(styles.statusIcon, { [styles.statusIconSuccess]: success })}>
          {success ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        <div className={clsx(styles.footer, { [styles.footerSuccess]: success })}>
          {success && (
            <Button id={successBtnId} onClick={successBtnHandler}>
              {successBtnText || "На главную"}
            </Button>
          )}
          {!success && (
            <Button id={errorBtnId} onClick={errorBtnHandler}>
              Закрыть
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};
