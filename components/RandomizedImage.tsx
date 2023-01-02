import Image from "next/image";

import styles from "../styles/components/RandomizedImage.module.scss";
import { ImageInfo, Shape } from "../utils/models";
import ShapedContainer from "./ShapedContainer";

interface RandomizedImageProps {
  width: number;
  height: number;
  shape: Shape;
  imgInfo?: ImageInfo;
}

export default function RandomizedImage({
  width,
  height,
  shape,
  imgInfo,
}: RandomizedImageProps): JSX.Element {
  const imgProps =
    imgInfo !== undefined
      ? typeof imgInfo.src === "string"
        ? { width: width, height: height }
        : { fill: true }
      : undefined;

  return (
    <ShapedContainer
      className={styles.container}
      style={{ width: width, height: height }}
      shape={shape}
    >
      {imgInfo !== undefined && (
        <Image
          className={styles.image}
          src={imgInfo.src}
          alt={imgInfo.alt}
          {...imgProps}
        />
      )}
    </ShapedContainer>
  );
}
