import { FormFields } from "@/components/ui/FormFields";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "@/components/ui/Select";
import { profileDescriptionFirstStepSchema } from "@/lib/yuo/profileDescriptionScheme.ts";
import { ProfileDescriptionFormNavigationButtons } from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormNavigationButtons";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";
import { useEffect } from "react";
import {
  ProfileDescriptionFormStepProps
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps/ProfileDescriptionFormStepProps.ts";

export const ProfileDescriptionFormFirstStep = (props: ProfileDescriptionFormStepProps) => {
  const { saveFormFields, handleNextStep, handlePrevStep } = props;
  const store = useProfileDescriptionFormStore(state => state);
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ProfileDescriptionFormTypes.FirstStep>({
    resolver: yupResolver(profileDescriptionFirstStepSchema),
    defaultValues: {
      nickname: store.nickname,
      name: store.name,
      sername: store.sername,
      sex: store.sex,
    },
  });

  const onSubmit = () => {
    handleNextStep();
  };

  useEffect(() => {
    return () => {
      saveFormFields(getValues());
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input id="field-nickname" label="Nickname" placeholder="Placeho7lder"
               error={errors.nickname?.message} {...register("nickname")} />
        <Input id="field-name" label="Name" placeholder="Placeholder"
               error={errors.name?.message} {...register("name")} />
        <Input id="field-sername" label="Sername" placeholder="Placeholder"
               error={errors.sername?.message} {...register("sername")} />
        <Select id="field-sex" placeholder="Не выбрано" label="Sex"
                error={errors.sex?.message} {...register("sex")}>
          <option value="" hidden>Не выбрано</option>
          <option id="field-sex-option-man" value="man">man</option>
          <option id="field-sex-option-woman " value="woman">woman</option>
        </Select>

      </FormFields>
      <ProfileDescriptionFormNavigationButtons submitOnClickNext
                                               prevButtonHandler={handlePrevStep} />
    </form>
  );
};
