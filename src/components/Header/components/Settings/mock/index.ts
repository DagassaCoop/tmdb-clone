import { TNavMenuLink } from "@/components/Header/types";

export const settingsLinks: TNavMenuLink<string>[][] = [
  [
    {
      title: "settings.discussion",
      key: "discussion",
    },
    {
      title: "settings.lists",
      key: "lists",
    },
    {
      title: "settings.ratings",
      key: "ratings",
    },
    {
      title: "settings.watchlist",
      key: "watchlist",
    },
  ],
  [
    {
      title: "settings.editProfile",
      key: "editProfile",
    },
    {
      title: "settings.settings",
      key: "settings",
    },
  ],
  [
    {
      title: "settings.logout",
      key: "logout",
    },
  ],
];
