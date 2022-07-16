import "./styles";

import * as React from "react";
import MainLayout from "./main";
import SideLayout from "./sidebar";

const AppLayout = () => {
  return (
    <div className="app-container">
      <SideLayout />
      <MainLayout />
    </div>
  );
};

export default AppLayout;
