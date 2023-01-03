import { CSSProperties, MouseEventHandler, ReactNode } from "react";

import styles from "../styles/components/ShapedContainer.module.scss";
import { Shape } from "../utils/models";

interface ShapedContainerProps {
  shape?: Shape;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export default function ShapedContainer({
  shape = Shape.rectangle,
  className,
  style,
  children,
  onMouseEnter,
  onMouseLeave,
}: ShapedContainerProps): JSX.Element {
  let containerStyle = styles.container;
  switch (shape) {
    case Shape.rectangle:
      containerStyle += ` ${styles["container--rectangle"]}`;
      break;
    case Shape.diamond:
      containerStyle += ` ${styles["container--diamond"]}`;
      break;
    case Shape.hexagon:
      containerStyle += ` ${styles["container--hexagon"]}`;
      break;
  }

  return (
    <div
      className={`${containerStyle} ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <>{children}</>
    </div>
  );
}
