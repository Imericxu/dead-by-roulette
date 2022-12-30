import { StaticImageData } from "next/image";

export interface ImageData {
  src: string | StaticImageData;
  altText: string;
}
