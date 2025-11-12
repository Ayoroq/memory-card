import React, { useState, useEffect } from "react";
import "./App.css";
import "./Reset.css";
import useFetchImage from "./ImageFetcher";
import Thumbnails from "./ThemeSelector";
import DisplayImage from "./DisplayImage";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { imageData, loading } = useFetchImage(selectedImage);
  
  function handleThumbnailClick(event) {
    const selectedThumnailImage = event.target.id;
    setSelectedImage(selectedThumnailImage);
  }

  return (
    <div className="App-container">
      <Thumbnails handleThumbnailClick={handleThumbnailClick} />
      <DisplayImage imageData={imageData} loading={loading}/>
    </div>
  );
}

export default App;
