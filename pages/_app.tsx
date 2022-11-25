import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import { Teko } from "@next/font/google";
// const teko = Teko({ weight: ["300", "400", "500", "600", "700"] });
import { Grape_Nuts } from "@next/font/google";
const grap = Grape_Nuts({ weight: ["400"] });
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  // <main className={grap.className}>
  {
    /* </main> */
  }
}
