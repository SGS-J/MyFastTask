import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <meta title="My Fast Task" />
      </Head>
      <Navigation />
      <Home />
    </>
  );
}
