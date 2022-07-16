import "./menu.less";

import * as React from "react";
import { useState, useEffect } from "react";
import cls from "classnames";
import { noop } from "../../utils/noop";

interface Menu {
  children?: React.ReactNode;
  isVisible?: boolean;
  containerCls?: string;
  menuCls?: string;
  onBackdropClick?: () => any;
}

const Menu: React.FC<Menu> = ({
  children,
  isVisible,
  containerCls = "menu-container",
  menuCls = "menu-options",
  onBackdropClick = noop,
}) => {
  const [showContainer, setShowContainer] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) return setFirstRender(false);

    if (!showContainer) {
      setShowContainer(true);
    } else {
      setTimeout(() => {
        setShowContainer(false);
      }, 201);
    }
  }, [isVisible]);

  const getContainerClass = cls(containerCls, { show: showContainer });
  const getMenuClass = cls(menuCls, { open: isVisible });

  return (
    <div className={getContainerClass}>
      <div className="backdrop" onClick={onBackdropClick} />
      <div
        className={getMenuClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;
