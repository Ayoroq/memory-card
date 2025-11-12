import React, { useState, useEffect } from "react";
import "./App.css";
import "./Reset.css";
import useFetchImage from "./ImageFetcher";
import Thumbnails from "./ThemeSelector";
import DisplayImage from "./DisplayImage";
import ScoreDisplay from "./Score";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { imageData, loading } = useFetchImage(selectedImage);
  const [clickedImagesId, setClickedImagesId] = useState([]);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      return;
    }
    setClickedImagesId((prev) => [...prev, clickedImage.id]);
    setScore((prev) => prev + 1);
    setShuffledImages(shuffleAndSlice([...imageData]));
  }

  return (
    <div className="App-container">
      <ScoreDisplay score={score} highScore={highScore} />
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
