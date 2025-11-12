import React from "react";
export default function DisplayImage({ shuffledImages, loading, alreadyClicked, onImageClick }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!shuffledImages || shuffledImages.length === 0) {
    return null;
  }
  if (alreadyClicked) {
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
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
