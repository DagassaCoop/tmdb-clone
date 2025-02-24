// Core
import React, { useRef, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";
// Styles
import Styles from "./styles/index.module.scss";
// Hooks
import { useOutsideClickCallback } from "@/hooks/useOutsideClickCallback";

const Notifications = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClickCallback(ref, () => setIsOpen(false));

  // TODO: add notifications API
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  return (
    <div className={Styles.notifications}>
      <Image
        unoptimized
        src={"./notifications-icon.svg"}
        alt="Notifications"
        width={24}
        height={24}
        className={Styles.icon}
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={cx([Styles.dropdown, isOpen && Styles.open])}>
        <span className={Styles.title}>
          {t("notifications.title")}:{" "}
          <span className={Styles.value}>{unreadNotifications}</span>
        </span>
        <p className={Styles.description}>
          {t(
            unreadNotifications > 0
              ? "notifications.notificationsExist"
              : "notifications.noNotifications"
          )}
        </p>
        <Link href={"/notifications"} className={Styles.link}>
          {t("notifications.viewAll")}
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
