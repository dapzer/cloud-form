import { FormFields } from "@/components/ui/FormFields";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "@/components/ui/Select";
import { firstStepSchema } from "@/lib/yuo/yupSchemas.ts";
import { FormNavigationButtons } from "@/components/FormPage/FormNavigationButtons";
import { useMultiStepFormStore } from "@/store/multiStepFormStore.ts";
import { MultiStepForm } from "@/types/MultiStepForm.ts";
import { useEffect } from "react";

interface FormFirstStepProps {
  saveFormFields: (form: Partial<MultiStepForm.RootObject>) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

export const FormFirstStep = (props: FormFirstStepProps) => {
  const { saveFormFields, handleNextStep, handlePrevStep } = props;
  const store = useMultiStepFormStore(state => state);
  const { register, handleSubmit, getValues, formState: { errors, dirtyFields } } = useForm<MultiStepForm.FirstStep>({
    resolver: yupResolver(firstStepSchema),
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
      if (dirtyFields) {
        saveFormFields(getValues());
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input id="field-nickname" label="Nickname" placeholder="Placeholder"
               error={errors.nickname?.message} {...register("nickname")} />
        <Input id="field-name" label="Name" placeholder="Placeholder"
               error={errors.name?.message} {...register("name")} />
        <Input id="field-sername" label="Sername" placeholder="Placeholder"
               error={errors.sername?.message} {...register("sername")} />
        <Select id="field-sex" placeholder="Не выбрано" label="Sex"
                error={errors.sex?.message} {...register("sex")}>
          <option value="">Не выбрано</option>
          <option id="field-sex-option-man" value="man">man</option>
          <option id="field-sex-option-woman " value="woman">woman</option>
        </Select>

        <FormNavigationButtons submitOnClickNext
                               prevButtonHandler={handlePrevStep} />
      </FormFields>
    </form>
  );
};
