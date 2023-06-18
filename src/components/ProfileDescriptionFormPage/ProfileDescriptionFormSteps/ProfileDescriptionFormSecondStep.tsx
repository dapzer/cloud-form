import {
  ProfileDescriptionFormStepProps,
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormSteps/ProfileDescriptionFormStepProps.ts";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import { useController, useFieldArray, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { FormFields } from "@/components/ui/FormFields";
import {
  ProfileDescriptionFormNavigationButtons,
} from "@/components/ProfileDescriptionFormPage/ProfileDescriptionFormNavigationButtons";
import styles from "./profile-description-form-steps.module.scss";
import { Input } from "@/components/ui/Input";
import { profileDescriptionSecondStepSchema } from "@/lib/yuo/profileDescriptionScheme.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PlusIcon, TrashIcon } from "@/components/ui/Icons";
import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";

const checkboxList = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
];

const radioList = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
];

export const ProfileDescriptionFormSecondStep = (props: ProfileDescriptionFormStepProps) => {
  const { saveFormFields, handleNextStep, handlePrevStep } = props;
  const store = useProfileDescriptionFormStore(state => state);
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<ProfileDescriptionFormTypes.SecondStep>({
    resolver: yupResolver(profileDescriptionSecondStepSchema),
    defaultValues: {
      advantages: store.advantages,
      checkbox: store.checkbox,
      radio: store.radio,
    },
  });

  const advantages = useFieldArray({
    control,
    name: "advantages",
  });

  const checkboxesController = useController({
    control,
    name: "checkbox",
    defaultValue: [],
  });

  useEffect(() => {
    return () => {
      saveFormFields(getValues());
    };
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (!checkboxesController.field.value.includes(value)) {
      checkboxesController.field.onChange([...(checkboxesController.field.value || []), value]);
    } else {
      checkboxesController.field.onChange(checkboxesController.field.value?.filter((item) => item !== value));
    }
  };

  const onSubmit = () => {
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <div className={styles.advantages}>
          <Typography as="p" variant="text">
            Advantages
          </Typography>
          {advantages.fields.map((item, index) => (
            <div key={index} className={styles.advantagesItem}>
              <Input id={`field-advantages-${index}`}
                     placeholder="Placeholder" {...register(`advantages.${index}.value`)}
                     error={errors.advantages?.[index]?.value?.message} />
              <Button id={`button-remove-${index}`} onClick={() => advantages.remove(index)}
                      variant="clear"><TrashIcon /></Button>
            </div>
          ))}
          <Button id="button-add" className={styles.advantagesNew} onClick={() => advantages.append({ value: "" })}
                  variant="outline"><PlusIcon /></Button>
        </div>

        <div>
          <Typography as="p" variant="text">
            Checkbox group
          </Typography>
          {checkboxList.map((el, index) => (
            <label key={index} className={styles.inputWrapper}>
              <Input id={`field-checkbox-group-option-${el.value}`} type="checkbox"
                     value={el.value}
                     checked={checkboxesController.field.value.includes(+el.value)}
                     onChange={handleCheckboxChange} />
              <Typography as="p" variant="text">{el.label}</Typography>
            </label>
          ))}
          {errors.checkbox && (
            <Typography variant="textSmall">
              {errors.checkbox?.message}
            </Typography>
          )}
        </div>

        <div>
          <Typography as="p" variant="text">
            Radio group
          </Typography>
          {radioList.map((el, index) => (
            <label key={index} className={styles.inputWrapper}>
              <Input id={`field-radio-group-option-${el.value}`} type="radio" defaultValue={el.value}
                     {...register(`radio`)} />
              <Typography as="p" variant="text">{el.label}</Typography>
            </label>
          ))}
          {errors.radio && (
            <Typography variant="textSmall">
              {errors.radio?.message}
            </Typography>
          )}
        </div>

        <ProfileDescriptionFormNavigationButtons submitOnClickNext
                                                 prevButtonText={"Back"}
                                                 prevButtonHandler={handlePrevStep} />
      </FormFields>
    </form>
  );
};
