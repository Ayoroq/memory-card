import React, { useState, useEffect } from "react";
export default function DisplayImage({ imageData, loading }) {
  const [clickedImagesId, setClickedImagesId] = useState([]);
  const [alreadyClicked, setIsAlreadyClicked] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    if (imageData && imageData.length > 0) {
      setShuffledImages(shuffleAndSlice([...imageData]));
    }
  }, [imageData]);

  // this is the 
  function shuffleAndSlice(data) {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 10);
  }

  function handleOnclick(event) {
    const clickedImage = event.target;
    if (clickedImagesId.includes(clickedImage.id)) {
      setIsAlreadyClicked(true);
    }
    setClickedImagesId((prevClickedImagesId) => {
      return [...prevClickedImagesId, clickedImage.id];
    });
    setShuffledImages(shuffleAndSlice([...imageData]));
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!imageData) {
    return null;
  }

  return (
    <ul className="image-container">
      {shuffledImages.map((image) => (
        <li key={image.id} className="image-item">
          <img
            id={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
            className="image"
            onClick={handleOnclick}
          />
        </li>
      ))}
    </ul>
  );
}
