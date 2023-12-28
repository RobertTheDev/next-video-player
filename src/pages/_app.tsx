import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#29D"
        options={{
          showSpinner: false,
        }}
      />

      <ThemeProvider defaultTheme={"system"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
