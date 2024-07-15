import Head from "next/head";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import AuthProvider from "@src/shared/provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const superFoods = localFont({
  src: [{ path: "./fonts/super-foods/Super-Foods.ttf", weight: "400" }],
  variable: "--font-super-foods",
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <main className={superFoods.className}>
      <Head>
        <title>ALPHA $APE</title>
        <meta
          name="description"
          content="THE KING OF APES, READY TO TAKE OVER BASE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon-ape.png" />
      </Head>
      <ConfigProvider
        theme={{
          token: { fontFamily: "var(--font-super-foods)" },
          components: { Steps: { descriptionMaxWidth: 352 } },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </main>
  );
}
