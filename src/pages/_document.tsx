/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";

export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
