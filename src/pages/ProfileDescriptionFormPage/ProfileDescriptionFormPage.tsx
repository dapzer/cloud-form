import { Paper } from "@/components/ui/Paper";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import styles from "./profile-description-form-page.module.scss"
import { ProfileDescriptionFormFirstStep } from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";
import { FormProgressBar } from "@/components/ui/FormProgressBar";
import {
  ProfileDescriptionFormSecondStep
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps/ProfileDescriptionFormSecondStep.tsx";
import {
  ProfileDescriptionFormThirdStep
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps/ProfileDescriptionFormThirdStep.tsx";
import { useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";

interface ProfileDescriptionFormPageProps {

}

export const ProfileDescriptionFormPage = (props: ProfileDescriptionFormPageProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1)
  const { updateMultipleFields, reset } = useProfileDescriptionFormStore(state => state, shallow);

  const saveFormFields = (form: Partial<ProfileDescriptionFormTypes.RootObject>) => {
    updateMultipleFields(form);
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  }

  const exitToMainPage = () => {
    navigate("/");
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <Paper formWrapper>
      <div className={styles.progressBar}>
        <FormProgressBar currentStep={currentStep} stepCount={3} />
      </div>

      {currentStep === 1 && <ProfileDescriptionFormFirstStep saveFormFields={saveFormFields} handleNextStep={handleNextStep} handlePrevStep={exitToMainPage} />}
      {currentStep === 2 && <ProfileDescriptionFormSecondStep saveFormFields={saveFormFields} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
      {currentStep === 3 && <ProfileDescriptionFormThirdStep saveFormFields={saveFormFields} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
      <Button onClick={() => setCurrentStep( currentStep - 1)}>-</Button>
      <Button onClick={() => setCurrentStep( currentStep + 1)}>+</Button>
    </Paper>
  );
};
