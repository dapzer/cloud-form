import { Paper } from "@/components/ui/Paper";
import { FormProgressBar } from "@/components/FormPage/FormProgressBar";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

interface FormPageProps {

}

export const FormPage = (props: FormPageProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Paper>
      <FormProgressBar currentStep={currentStep} stepCount={3} />
      <Button onClick={() => setCurrentStep( currentStep - 1)}>-</Button>
      <Button onClick={() => setCurrentStep( currentStep + 1)}>+</Button>
    </Paper>
  );
};
