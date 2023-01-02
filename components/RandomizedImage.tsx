import Image, { StaticImageData } from "next/image";

import Diamond from "../public/images/diamond.svg";
import Hexagon from "../public/images/hexagon.svg";
import styles from "../styles/components/RandomizedImage.module.scss";
import { ImageInfo, Shape } from "../utils/models";

interface RandomizedImageProps {
  width: number;
  height: number;
  imgInfo?: ImageInfo;
  shape?: Shape;
}

export default function RandomizedImage({
  width,
  height,
  imgInfo,
  shape = Shape.rectangle,
}: RandomizedImageProps): JSX.Element {
  let shapeComponent: JSX.Element;
  switch (shape) {
    case Shape.rectangle:
      shapeComponent = (
        <div className={`${styles.shape} ${styles["shape--rectangle"]}`}></div>
      );
      break;
    case Shape.diamond:
      shapeComponent = <Diamond className={styles.shape} />;
      break;
    case Shape.hexagon:
      shapeComponent = <Hexagon className={styles.shape} />;
      break;
  }

  // Set explicity width and height if image isn't static.
  let imgComponent: JSX.Element | undefined;
  if (imgInfo !== undefined) {
    let imgStyles = styles.image;
    if (shape === Shape.diamond) imgStyles += ` ${styles["image--diamond"]}`;
    else if (shape === Shape.hexagon)
      imgStyles += ` ${styles["image--hexagon"]}`;

    if (typeof imgInfo.src === "string") {
      imgComponent = (
        <Image
          className={imgStyles}
          src={imgInfo.src}
          alt={imgInfo.alt}
          width={width}
          height={height}
        />
      );
    } else {
      imgComponent = (
        <Image className={imgStyles} src={imgInfo.src} alt={imgInfo.alt} fill />
      );
    }
  }

  return (
    <button
      className={styles.container}
      style={{
        width: width,
        height: height,
      }}
      type="button"
    >
      {shapeComponent}
      {imgComponent}
    </button>
  );
}
