"use client";
// Core
import { FC, useState } from "react";

// Styles
import Styles from "./styles/index.module.scss";

// Components
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = {
  tags: string[];
};

function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const FloatingButton: FC<Props> = ({ tags }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
    // callback(data[newValue]);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className={Styles["floating-button"]}
      classes={{ indicator: Styles["tabs-indicator"] }}
    >
      {tags.map((str, index) => {
        return (
          <Tab
            key={index}
            label={str}
            {...a11yProps(index)}
            classes={{ root: Styles["tab-root"], selected: Styles.selected }}
          />
        );
      })}
    </Tabs>
  );
};

export default FloatingButton;
