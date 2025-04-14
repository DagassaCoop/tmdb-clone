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

// Styles
import Styles from "./index.module.scss";

const Home = () => {
  return (
    <Base>
      <div className={Styles["home-page"]}>
        <MediaList content={mediaListContents[MediaListContents.TRENDING]} />
        <MediaList content={mediaListContents[MediaListContents.POPULAR]} />
      </div>
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
