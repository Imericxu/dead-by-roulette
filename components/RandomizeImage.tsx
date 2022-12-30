import Image from "next/image";

import { ImageData } from "../utils/models";

interface RandomizeImageProps {
  width: number | string;
  height: number | string;
  imgData?: ImageData;
}

export default function RandomizeImage({
  width,
  height,
  imgData,
}: RandomizeImageProps): JSX.Element {
  return (
    <div style={{ width: width, height: height, background: "gray" }}>
      {imgData !== undefined && (
        <Image src={imgData.src} alt={imgData.altText} />
      )}
    </div>
  );
}
