import "./backdrop.less";

import * as React from "react";
import { createPortal } from "react-dom";

interface IBackdrop {
  isOpen: boolean;
  onClick?: () => void;
}

const backdropElement = document.getElementById("backdrop")!;

const Backdrop: React.FC<IBackdrop> = ({ isOpen, onClick }) => {
  if (!isOpen) return null;

  return <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
