import { StaticImageData } from "next/image";
import Image from "next/image";

interface RandomizeImageProps {
  width: number | string;
  height: number | string;
  imgSrc: string | StaticImageData;
  altText: string;
}

export default function RandomizeImage({
  width,
  height,
  imgSrc,
  altText,
}: RandomizeImageProps): JSX.Element {
  return (
    <div style={{ width: width, height: height, background: "gray" }}>
      <Image src={imgSrc} alt={altText} />
    </div>
  );
}
