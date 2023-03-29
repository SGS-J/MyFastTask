import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";

export default function App({ Component, pageProps }) {
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
