import * as React from "react";
import SidebarHeader from "../../sidebarHeader/SidebarHeader";
import UserMenu from "../userMenu/UserMenu";
import "./styles.css";

const SideLayout = () => {
  return (
    <div className="side-layout-container">
      <SidebarHeader />
      <UserMenu />
    </div>
  );
};

export default SideLayout;
