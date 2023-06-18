import styles from "./form-progress-bar.module.scss";
import { Typography } from "@/components/ui/Typography";
import clsx from "clsx";
import { CheckedIcon } from "@/components/ui/Icons";

interface FormProgressBarProps {
  currentStep: number;
  stepCount: number;
}

export const FormProgressBar = (props: FormProgressBarProps) => {
  const { currentStep, stepCount } = props;
  return (
    <div className={styles.wrapper}>
      {Array(stepCount).fill("_").map((_, index) => (
        <div key={index} className={clsx(styles.step, {
          [styles.stepActive]: currentStep === index + 1,
          [styles.stepCompleted]: currentStep > index + 1,
        })}>
          <div className={styles.line} />
          <div className={styles.label}>
            <div className={styles.labelIcon}>
              <CheckedIcon />
            </div>
            <Typography as="span">
              {index + 1}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
