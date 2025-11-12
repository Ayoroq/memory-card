import React, { useState, useEffect } from "react";
import "./App.css";
import "./Reset.css";
import useFetchImage from "./ImageFetcher";
import Thumbnails from "./ThemeSelector";
import DisplayImage from "./DisplayImage";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { imageData, loading } = useFetchImage(selectedImage);
  const [clickedImagesId, setClickedImagesId] = useState([]);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);

  function shuffleAndSlice(data) {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 10);
  }

  useEffect(() => {
    if (imageData && imageData.length > 0) {
      setShuffledImages(shuffleAndSlice([...imageData]));
    }
  }, [imageData]);
  
  function handleThumbnailClick(event) {
    const selectedThumbnailImage = event.target.id;
    setSelectedImage(selectedThumbnailImage);
  }

  function handleImageClick(event) {
    const clickedImage = event.target;
    if (clickedImagesId.includes(clickedImage.id)) {
      setAlreadyClicked(true);
    }
    setClickedImagesId(prev => [...prev, clickedImage.id]);
    setShuffledImages(shuffleAndSlice([...imageData]));
  }

  return (
    <div className="App-container">
      <Thumbnails handleThumbnailClick={handleThumbnailClick} />
      <DisplayImage 
        shuffledImages={shuffledImages}
        loading={loading}
        alreadyClicked={alreadyClicked}
        onImageClick={handleImageClick}
      />
    </div>
  );
}

export default App;
