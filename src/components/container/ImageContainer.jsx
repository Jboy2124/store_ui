import React from "react";

const ImageContainer = ({ imagePath, width, height }) => {
  const src = import.meta.env.VITE_BASE_URL + "/" + imagePath;
  return (
    <div>
      <img src={src} alt="Products" width={width} height={height} />
    </div>
  );
};

export default ImageContainer;
