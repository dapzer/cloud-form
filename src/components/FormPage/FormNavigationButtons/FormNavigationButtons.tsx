import styles from "./form-navigation-buttons.module.scss";
import { Button } from "@/components/ui/Button";

interface NavigationButtonsProps {
  prevButtonHandler: () => void;
  nextButtonHandler: () => void;
  prevButtonText?: string;
  nextButtonText?: string;
  prevButtonId?: string;
  nextButtonId?: string;
  submitOnClickNext?: boolean;
}

export const FormNavigationButtons = (props: NavigationButtonsProps) => {
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
