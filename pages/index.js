import Head from "next/head";
import { Home } from "../components/Home";

export default function home() {
  return (
    <>
      <Home />
      <Head>
        <title>Rahul Vaidun</title>
        <meta property="og:title" content="Rahul Vaidun" key="title" />
      </Head>
    </>
  );
}
