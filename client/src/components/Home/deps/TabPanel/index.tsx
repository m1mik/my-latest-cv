import React from "react";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
  className?: any;
}

const TabPanel = ({
  value,
  index,
  children,
  className,
  ...rest
}: TabPanelProps) =>
  value === index ? (
    <div className={className} {...rest}>
      {children}
    </div>
  ) : null;

export default TabPanel;
