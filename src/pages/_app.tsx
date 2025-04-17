// Core
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";

// Styles
import "@/styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps} options={{ enableCssLayer: true }}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}

export default appWithTranslation(App);
