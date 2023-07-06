import useUser from "@/hooks/useUser";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const { user } = useUser();

  const handleLogOut = async () => {
    await fetch("/user/logout");
    router.push("/login");
  };

  return (
    <>
      <Navigation userLogged={user} submitUser={handleLogOut} />
      {children}
    </>
  );
}
