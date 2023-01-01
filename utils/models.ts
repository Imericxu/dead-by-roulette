import { StaticImageData } from "next/image";

export interface ImageInfo {
  src: string | StaticImageData;
  alt: string;
}

export enum Shape {
  rectangle,
  diamond,
  hexagon,
}
