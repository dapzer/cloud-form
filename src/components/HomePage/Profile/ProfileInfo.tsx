import styles from "@/components/HomePage/Profile/profile.module.scss";
import { Typography } from "@/components/ui/Typography";
import { FolderIcon } from "@/components/ui/Icons";
import { ProfileLinkType } from "@/components/HomePage/Profile/ProfileTypes.ts";

interface ProfileInfoProps {
  profileLinks: ProfileLinkType[];
  name: string;
  initials: string;
}

export const ProfileInfo = (props: ProfileInfoProps) => {
  const { profileLinks, name, initials } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.initials}>
        <Typography variant={"bigTitle"}>{initials}</Typography>
      </div>

      <div className={styles.info}>
        <Typography variant={"title"} as={"h1"}>
          {name}
        </Typography>

        <div className={styles.links}>
          {profileLinks.map((link, index) => (
            <div key={index}>
              <FolderIcon />
              <Typography variant={"link"} as={"a"} href={link.href} target={"_blank"} rel={"noreferrer"}>
                {link.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
