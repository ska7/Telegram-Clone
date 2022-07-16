import "./button.less";

import * as React from "react";
import RippleContainer from "../rippleContainer/RippleContainer";

interface IUserMenu {
  children?: React.ReactNode;
  onClick?: () => any;
  isActive?: boolean;
  containerCls?: string;
  buttonCls?: string;
  activeCls?: string;
}

const noop = () => {};

const Button: React.FC<IUserMenu> = ({
  children,
  onClick = noop,
  isActive,
  containerCls = "",
  buttonCls = "btn",
  activeCls,
}) => {
  const getActiveCls = () => activeCls ?? "active";
  const getBtnCls = () => `${buttonCls} ${isActive ? getActiveCls() : ""}`;
  return (
    <div className={containerCls}>
      <button className={getBtnCls()}>
        <RippleContainer onClick={onClick}>{children}</RippleContainer>
      </button>
    </div>
  );
};

export default Button;
