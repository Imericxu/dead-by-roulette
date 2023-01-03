import Image from "next/image";
import { useState } from "react";

import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/components/RandomizedImage.module.scss";
import AppColor, { getRarityColor } from "../utils/colors";
import { ImageInfo, Shape } from "../utils/models";
import Rarity from "../utils/rarity";
import ShapedContainer from "./ShapedContainer";

interface RandomizedImageProps {
  width: number;
  height: number;
  shape: Shape;
  imgInfo?: ImageInfo;
  rarity?: Rarity;
  borderSize?: number;
}

export default function RandomizedImage({
  width,
  height,
  shape,
  imgInfo,
  rarity,
  borderSize = 0,
}: RandomizedImageProps): JSX.Element {
  const imgProps =
    imgInfo !== undefined
      ? typeof imgInfo.src === "string"
        ? { width: width - borderSize, height: height - borderSize }
        : { fill: true }
      : undefined;

  return (
    <div className={styles.wrapper}>
      <ShapedContainer
        className={styles.outline}
        style={{
          width: width,
          height: height,
        }}
        shape={shape}
      >
        <ShapedContainer
          style={{
            width: width - borderSize,
            height: height - borderSize,
            background:
              rarity !== undefined
                ? `radial-gradient(circle, ${getRarityColor(rarity)} 0%, ${
                    AppColor.surface
                  } 100%)`
                : AppColor.surface,
            pointerEvents: "none",
          }}
          shape={shape}
        >
          <button className={styles.button}>
            {imgInfo !== undefined && (
              <Image
                className={styles.image}
                src={imgInfo.src}
                alt={imgInfo.alt}
                {...imgProps}
              />
            )}

            <div
              className={
                styles.overlay +
                (shape === Shape.rectangle
                  ? ` ${styles["overlay--rectangle"]}`
                  : "")
              }
              style={{ width: width - borderSize, height: height - borderSize }}
            >
              <FontAwesomeIcon
                fontSize={(width - borderSize) / 3}
                icon={faArrowRotateRight}
              />
            </div>
          </button>
        </ShapedContainer>
      </ShapedContainer>
    </div>
  );
}
