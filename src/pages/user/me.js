import Main from "@/components/UserPage/Main/Main";
import useUser from "@/hooks/useUser";

export default function me() {
  const user = useUser();

  return <Main user={user} />;
}
