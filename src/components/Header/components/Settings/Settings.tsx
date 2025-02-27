// Core
import React, { useRef, useState } from "react";
import cx from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";

// Styles
import Styles from "./styles/index.module.scss";
// Hooks
import { useOutsideClickCallback } from "@/hooks/useOutsideClickCallback";
// Mock
import { settingsLinks } from "./mock";

const Settings = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClickCallback(ref, () => setIsOpen(false));

  // TODO: add user API
  const [user] = useState<{ username: string }>({
    username: "TestName",
  });

  return (
    <div className={Styles.settings} ref={ref}>
      <div className={Styles.icon} onClick={() => setIsOpen(!isOpen)}>
        <span className={Styles.text}>D</span>
      </div>
      <div className={cx([Styles.dropdown, isOpen && Styles.open])}>
        <div className={Styles.options}>
          <div className={Styles.user}>
            <span className={Styles["user-name"]}>{user.username}</span>
            <Link href="/" className={Styles["view-profile"]}>
              {t("settings.viewProfile")}
            </Link>
          </div>
          {settingsLinks.map((group, index) => (
            <div key={index} className={Styles.group}>
              {group.map((link) => (
                <Link key={link.key} className={Styles.link} href={link.key}>
                  {t(link.title)}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
