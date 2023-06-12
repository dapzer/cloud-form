import styles from "./profile.module.scss";
import { ProfileInfo } from "@/components/HomePage/Profile/ProfileInfo.tsx";
import React from "react";
import { profileContacts, profileLinks } from "./profileData.ts";
import { FormFields } from "@/components/ui/FormFields";
import { Input } from "@/components/ui/Input";


interface ProfileProps {

}

export const Profile = (props: ProfileProps) => {
  return (
    <section>
      <ProfileInfo profileLinks={profileLinks} name={"Данила Воронков"} initials={"ДВ"} />
      <hr className={styles.divider} />
      <FormFields>
        {profileContacts.map((el, index) => (
          <Input disabled key={index} label={el.label} value={el.contact} />
        ))}
      </FormFields>
    </section>
  );
};
