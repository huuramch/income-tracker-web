import "@/styles/globals.css"
import "@/styles/currency.css"
import "@/styles/balance.css"
import "@/styles/job.css"
import "@/styles/navbar.css"
import "@/styles/login.css"
import "@/styles/income.css"
import "@/styles/list.css"
import "@/styles/all.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
