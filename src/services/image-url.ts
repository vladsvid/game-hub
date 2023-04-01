const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const crop = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + crop + url.slice(index);
};

export default getCroppedImageUrl;
