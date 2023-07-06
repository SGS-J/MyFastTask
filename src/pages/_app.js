import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Layout from "@/components/Layout";
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
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
