import { Typography } from "@/components/ui/Typography";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

interface HomePageProps {
}

export const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Typography variant="title" as={"h1"}>Home</Typography>
      <Typography variant="text">Home</Typography>
      <Typography variant="textSmall" as={"span"}>Home</Typography>
      <Typography variant="link" as={"a"}>Home</Typography>
      <Input label="Home" placeholder="Home" error="Home" />
      <Input label="Home" placeholder="Home" error="Home" disabled />
      <Textarea label="Home" placeholder="Home" error="Home" />
    </div>
  );
};
