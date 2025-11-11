import React, { useState } from "react";
import "./App.css";
import "./Reset.css";
import ImageFetcher from "./ImageFetcher";
import Thumbnails from "./ThemeSelector";

function App() {
  function handleThumbnailClick(event) {
    const selectedImage = event.target.id;
    const { fetchImage, loading } = ImageFetcher;
    fetchImage(selectedImage);
    console.log(selectedImage);
  }

  return (
    <div className="App-container">
      <Thumbnails handleThumbnailClick={handleThumbnailClick} />
    </div>
  );
}

export default App;
