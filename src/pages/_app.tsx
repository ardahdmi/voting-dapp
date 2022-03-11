import { AppProps } from "next/app";
import "../public/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
