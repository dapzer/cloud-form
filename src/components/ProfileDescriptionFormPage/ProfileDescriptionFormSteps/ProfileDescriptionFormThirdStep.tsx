import {
  ProfileDescriptionFormStepProps,
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps/ProfileDescriptionFormStepProps.ts";
import {
  ProfileDescriptionFormNavigationButtons,
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormNavigationButtons";
import React, { useEffect, useState } from "react";
import { FormFields } from "@/components/ui/FormFields";
import { Textarea } from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import { profileDescriptionThirdStepSchema } from "@/lib/yuo/profileDescriptionScheme.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { RequestStatusModal } from "@/components/ui/RequestStatusModal";
import { useNavigate } from "react-router-dom";

export const ProfileDescriptionFormThirdStep = (props: ProfileDescriptionFormStepProps) => {
  const { saveFormFields, handleNextStep, handlePrevStep } = props;
  const navigate = useNavigate();
  const store = useProfileDescriptionFormStore(state => state);
  const [isSuccessSended, setIsSuccessSended] = useState(false);
  const [showSendedModal, setShowSendedModal] = useState(false);
  const [aboutLength, setAboutLength] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileDescriptionThirdStepSchema),
    defaultValues: {
      about: store.about,
    },
  });

  useEffect(() => {
    return () => {
      saveFormFields(getValues());
    };
  }, []);

  const onSubmit = () => {
    saveFormFields(getValues());
    store.sendForm().then(() => {
      setIsSuccessSended(true);
      setShowSendedModal(true);
    }).catch(() => {
      setIsSuccessSended(false);
      setShowSendedModal(true);
    });
  };

  const successBtnHandler = () => {
    store.reset();
    navigate("/");
  };

  const myFieldLength = getValues("about").length;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormFields>
        <Textarea id="field-about" label="About" placeholder="Placeholder" {...register("about")}
                  error={errors.about?.message} showCurrentLength currentLength={aboutLength}
                  onChange={(event) => setAboutLength(event.target.value.trim().length)} />
      </FormFields>

      {showSendedModal && (
        <RequestStatusModal errorBtnHandler={() => setShowSendedModal(false)} successBtnHandler={successBtnHandler}
                            handleClose={() => setShowSendedModal(false)} success={isSuccessSended}
                            successBtnId="button-to-main" errorBtnId="button-close"
        />
      )}

      <ProfileDescriptionFormNavigationButtons submitOnClickNext
                                               nextButtonText={"Отправить"}
                                               nextButtonId="button-send"
                                               prevButtonHandler={handlePrevStep} />
    </form>
  );
};
