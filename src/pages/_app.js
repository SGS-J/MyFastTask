import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== "undefined"
      ? import("bootstrap/dist/js/bootstrap.js")
      : null;
  }, []);

  return (
    <>
      <Head>
        <title>My Fast Task</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />;
    </>
  );
}
