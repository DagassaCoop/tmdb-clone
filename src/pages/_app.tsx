// Core
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";

// Styles
import "@/styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}

export default appWithTranslation(App);
