import * as React from "react";
import SideLayout from "./sideLayout";
import MainLayout from "./mainLayout";
import "./styles";

const AppLayout = () => {
  return (
    <div className="app-container">
      <SideLayout />
      <MainLayout />
    </div>
  );
};

export default AppLayout;
