import React from "react";

interface TabPanelProps {
  value: number;
  index: number;
  children: any;
}

const TabPanel = ({ value, index, children }: TabPanelProps) =>
  value === index ? <div>{children}</div> : null;

export default TabPanel;
