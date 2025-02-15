import React, { Suspense } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Base from "@/views/base";

const TopRated = () => {
  return;
  <Suspense fallback={<div>Loading...</div>}>
    <Base>TopRated</Base>
  </Suspense>;
};

export default TopRated;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
