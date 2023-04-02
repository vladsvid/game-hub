import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const crop = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + crop + url.slice(index);
};

export default getCroppedImageUrl;
