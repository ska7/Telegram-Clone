import "./userMenuOption.less";

import * as React from "react";

interface IUserMenuOption {
  icon: React.ReactNode;
  optionName: string;
  label?: React.ReactNode | string;
}

const UserMenuOption: React.FC<IUserMenuOption> = ({
  icon,
  optionName,
  label,
}) => {
  return (
    <div role="button" className="user-menu-option">
      {icon}
      <div>
        <p>{optionName}</p>
        {label ? <span className="option-label">{label}</span> : null}
      </div>
    </div>
  );
};

export default UserMenuOption;
