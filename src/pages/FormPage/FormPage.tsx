import { Paper } from "@/components/ui/Paper";
import { FormProgressBar } from "@/components/FormPage/FormProgressBar";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import styles from "./form-page.module.scss"
import { FormFirstStep } from "@/components/FormPage/FormSteps";

interface FormPageProps {

}

export const FormPage = (props: FormPageProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Paper formWrapper>
      <div className={styles.progressBar}>
        <FormProgressBar currentStep={currentStep} stepCount={3} />
      </div>

      {currentStep === 1 && <FormFirstStep />}

      <Button onClick={() => setCurrentStep( currentStep - 1)}>-</Button>
      <Button onClick={() => setCurrentStep( currentStep + 1)}>+</Button>
    </Paper>
  );
};
