// Core
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Mock
import { mediaListContents } from "@/components/MediaList/mock/mediaListContents";

// Types
import { MediaListContents } from "@/components/MediaList/types";

// Components
import Base from "@/views/base";
import MediaList from "@/components/MediaList/MediaList";

const Home = () => {
  return (
    <Base>
      <MediaList content={mediaListContents[MediaListContents.TRENDING]} />
    </Base>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default Home;
