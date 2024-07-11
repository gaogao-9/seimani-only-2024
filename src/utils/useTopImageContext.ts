import { createImageContext } from "@/utils/useImageContext";

const imageNames = [
  "top.png",
  "logo.png",
] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(imageNames, (imageName) => `/assets/img/top/${imageName}`);

export {
  ImageContext as TopImageContext,
  useImageContext as useTopImageContext,
  useImageContextValue as useTopImageContextValue,
};
