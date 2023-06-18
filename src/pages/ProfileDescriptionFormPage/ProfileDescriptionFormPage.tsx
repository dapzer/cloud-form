import { Paper } from "@/components/ui/Paper";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import styles from "./profile-description-form-page.module.scss"
import { ProfileDescriptionFormFirstStep } from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";
import { FormProgressBar } from "@/components/ui/FormProgressBar";

interface ProfileDescriptionFormPageProps {

}

export const ProfileDescriptionFormPage = (props: ProfileDescriptionFormPageProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const updateMultipleFields = useProfileDescriptionFormStore(state => state.updateMultipleFields);

  const saveFormFields = (form: Partial<ProfileDescriptionFormTypes.RootObject>) => {
    updateMultipleFields(form);
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <Paper formWrapper>
      <div className={styles.progressBar}>
        <FormProgressBar currentStep={currentStep} stepCount={3} />
      </div>

      {currentStep === 1 && <ProfileDescriptionFormFirstStep saveFormFields={saveFormFields} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}

      <Button onClick={() => setCurrentStep( currentStep - 1)}>-</Button>
      <Button onClick={() => setCurrentStep( currentStep + 1)}>+</Button>
    </Paper>
  );
};
