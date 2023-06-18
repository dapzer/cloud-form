import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";

export interface ProfileDescriptionFormStepProps {
  saveFormFields: (form: Partial<ProfileDescriptionFormTypes.RootObject>) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}
