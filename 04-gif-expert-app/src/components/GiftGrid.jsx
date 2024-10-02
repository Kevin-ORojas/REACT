import React, { useEffect, useState } from "react";
import { getUrls } from "./helpers/getGifts";
import { GifItem } from "./GifItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const images = await getUrls(category);
    setImages(images);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <div className="categorias-imagenes">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
