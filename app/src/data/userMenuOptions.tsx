import * as React from "react";
import BookmarkIcon from "icons/bookmark-icon.svg";
import PersonIcon from "icons/person-icon.svg";
import GearIcon from "icons/gear-icon.svg";

type MenuOption = {
  icon: React.ReactNode;
  optionName: string;
  label?: React.ReactNode | string;
};

export const userMenuOptions: MenuOption[] = [
  {
    icon: <BookmarkIcon />,
    optionName: "Saved Messages",
  },
  {
    icon: <PersonIcon />,
    optionName: "Contacts",
  },
  {
    icon: <GearIcon />,
    optionName: "Settings",
  },
];
