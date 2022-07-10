import "./styles";

import * as React from "react";
import MainLayout from "./mainLayout/MainLayout";
import SideLayout from "./sideLayout/SideLayout";

const AppLayout = () => {
  return (
    <div className="app-container">
      <SideLayout />
      <MainLayout />
    </div>
  );
};

export default AppLayout;
