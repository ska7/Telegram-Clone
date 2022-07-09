import * as React from "react";
import { useEffect, useState, useRef } from "react";
import "./rippleContainer.less";

interface IRippleContainer {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const RippleContainer: React.FC<IRippleContainer> = ({ children, onClick }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  const rippleContainerRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = rippleContainerRef.current.getBoundingClientRect();
    console.log(rect);
    setCoords({
      x: event.clientX - rect.left - 10,
      y: event.clientY - rect.top - 10,
    });
    setIsRippling(true);

    onClick && onClick(event);
  };

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 400);
    } else setIsRippling(false);
  }, [coords]);

  return (
    <div
      ref={rippleContainerRef}
      className="ripple-container"
      onClick={handleClick}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : null}
      <div>{children}</div>
    </div>
  );
};

export default RippleContainer;
