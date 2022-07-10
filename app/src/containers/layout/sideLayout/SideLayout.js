import "./sideLayout.less";

import * as React from "react";
import SidebarHeader from "../../sidebarHeader/SidebarHeader";
import UserMenu from "../userMenu/UserMenu";

const SideLayout = () => {
  return (
    <div className="side-layout-container">
      <SidebarHeader />
      <UserMenu />
    </div>
  );
};

export default SideLayout;
