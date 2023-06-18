import styles from "./profile-description-form-navigation-buttons.module.scss";
import { Button } from "@/components/ui/Button";

interface ProfileDescriptionFormNavigationButtonsProps {
  prevButtonHandler: () => void;
  nextButtonHandler?: () => void;
  prevButtonText?: string;
  nextButtonText?: string;
  prevButtonId?: string;
  nextButtonId?: string;
  submitOnClickNext?: boolean;
}

export const ProfileDescriptionFormNavigationButtons = (props: ProfileDescriptionFormNavigationButtonsProps) => {
  const {
    prevButtonHandler,
    nextButtonHandler,
    prevButtonText,
    nextButtonText,
    prevButtonId,
    nextButtonId,
    submitOnClickNext,
  } = props;

  return (
    <div className={styles.wrapper}>
      <Button onClick={prevButtonHandler} id={prevButtonId || "button-back"} variant="outline">
        {prevButtonText || "Назад"}
      </Button>
      <Button onClick={nextButtonHandler} id={nextButtonId || "button-next"}
              type={submitOnClickNext ? "submit" : "button"}>
        {nextButtonText || "Далее"}
      </Button>
    </div>
  );
};
