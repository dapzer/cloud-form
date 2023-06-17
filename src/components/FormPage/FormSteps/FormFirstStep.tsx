import { FormFields } from "@/components/ui/FormFields";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "@/components/ui/Select";
import { firstStepSchema } from "@/lib/yuo/yupSchemas.ts";
import { FormNavigationButtons } from "@/components/FormPage/FormNavigationButtons";

interface FormFirstStepProps {

}

export const FormFirstStep = (props: FormFirstStepProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(firstStepSchema),
  });

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <Input id="field-nickname" label="Nickname" placeholder="Placeholder" error={errors.nickname?.message} {...register("nickname")} />
        <Input id="field-name" label="Name" placeholder="Placeholder" error={errors.name?.message} {...register("name")} />
        <Input id="field-sername" label="Sername" placeholder="Placeholder" error={errors.sername?.message} {...register("sername")} />
        <Select id="field-sex" placeholder="Не выбрано" label="Sex" error={errors.sex?.message} {...register("sex")}>
          <option value="">Не выбрано</option>
          <option id="field-sex-option-man" value="man">man</option>
          <option id="field-sex-option-woman " value="woman">woman</option>
        </Select>

        <FormNavigationButtons submitOnClickNext nextButtonHandler={() => console.log("next")}
                               prevButtonHandler={() => console.log("prev")} />
      </FormFields>
    </form>
  );
};
