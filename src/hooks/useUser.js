import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useUser({ redirectTo } = {}) {
  const [userLogged, setUserLogged] = useState("");
  const router = useRouter();

  const requestData = async () => {
    try {
      const res = await fetch("/user/me");
      const { name } = await res.json();
      setUserLogged(name);
    } catch (error) {
      setUserLogged("");
    }
  };

  requestData();

  useEffect(() => {
    if (!redirectTo) return;
    if (!userLogged) router.push(redirectTo);
  }, [userLogged, redirectTo]);

  return userLogged;
}
