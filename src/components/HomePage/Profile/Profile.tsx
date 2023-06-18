import styles from "./profile.module.scss";
import { ProfileInfo } from "@/components/HomePage/Profile/ProfileInfo.tsx";
import { Ref, useRef } from "react";
import { profileLinks } from "./profileData.ts";
import { FormFields } from "@/components/ui/FormFields";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { useProfileDescriptionFormStore } from "@/store/profileDescriptionFormStore.ts";
import MaskedInput from "react-text-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileDescriptionContactsSchema } from "@/lib/yuo/profileDescriptionScheme.ts";
import { ProfileDescriptionFormTypes } from "@/types/ProfileDescriptionFormTypes.ts";

interface ProfileProps {

}

export const Profile = (props: ProfileProps) => {
  const store = useProfileDescriptionFormStore();

  const { handleSubmit, register, setValue, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(profileDescriptionContactsSchema),
    defaultValues: {
      phone: store.phone,
      email: store.email,
    },
  });

  const onSubmit = (data: ProfileDescriptionFormTypes.Contacts) => {
    store.updateMultipleFields(data);
  };

  return (
    <section>
      <ProfileInfo profileLinks={profileLinks} name={"Данила Воронков"} initials={"ДВ"} />
      <hr className={styles.divider} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <MaskedInput
            disabled
            mask={["+", "7", " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
            placeholder="Placeholder"
            {...register("phone")}
            value={getValues().phone}
            render={(ref, props) => (
              <Input error={errors.phone?.message} label="Номер телефона"
                     ref={ref as Ref<HTMLInputElement>} {...props} />
            )}
            onChange={(e) => {
              setValue("phone", e.target.value.replace(/[^\d]/g, "").replace(/^7/, ""));
            }}
          />
          <Input disabled {...register("email")} placeholder="Placeholder" label="Email"
                 error={errors.email?.message} />
        </FormFields>
      </form>
    </section>
  );
};
