import { Typography } from "@/components/ui/Typography";

interface HomePageProps {
}

export const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Typography variant="title" as={"h1"}>Home</Typography>
      <Typography variant="text">Home</Typography>
      <Typography variant="textSmall" as={'span'}>Home</Typography>
      <Typography variant="link" as={'a'}>Home</Typography>
    </div>
  );
};
