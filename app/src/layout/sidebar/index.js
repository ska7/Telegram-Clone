import "./sideLayout.less";

import * as React from "react";
import SidebarHeader from "./header/SidebarHeader";
import UserMenu from "./userMenu/UserMenu";

const SideLayout = () => {
  return (
    <div className="side-layout-container">
      <SidebarHeader />
    </div>
  );
};

export default SideLayout;
