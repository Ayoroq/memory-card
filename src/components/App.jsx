import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./Reset.css";
import useFetchImage from "./ImageFetcher";
import Thumbnails from "./ThemeSelector";
import DisplayImage from "./DisplayImage";
import ScoreDisplay from "./Score";
import GameStatus from "./GameStatus";
import LandingPage from "./LandingPage";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { imageData, loading } = useFetchImage(selectedImage);
  const [clickedImagesId, setClickedImagesId] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const stored = localStorage.getItem("highScore");
    return stored ? parseInt(stored) : 0;
  });
  const [appLoading, setAppLoading] = useState(true);
  const dialogRef = useRef(null);
  function shuffleAndSlice(data) {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 10);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imageData && imageData.length > 0) {
      imageData.forEach((image) => {
        const img = new Image();
        img.src = image.urls.regular;
      });
      setShuffledImages(shuffleAndSlice([...imageData]));
    }
  }, [imageData]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore.toString());
  }, [highScore]);

  useEffect(() => {
    if ((alreadyClicked || score === 30) && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [alreadyClicked, score]);

  function restart() {
    setAlreadyClicked(false);
    setClickedImagesId([]);
    setShuffledImages(shuffleAndSlice([...imageData]));
    setScore(0);
    dialogRef.current.close();
  }

  function endGame() {
    setAlreadyClicked(false);
    setClickedImagesId([]);
    setScore(0);
    setSelectedImage(null);
    setShuffledImages([]);
    dialogRef.current.close();
  }

  function rotateImage(event){
    const image = event.target;
    const rect = image.getBoundingClientRect();
    // Calculate the position of the mouse relative to the card's top-left corner
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 
    
    // Find the center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate the rotation angles based on mouse position
    const rotateX = ((y - centerY) / centerY) * 20; 
    const rotateY = ((centerX - x) / centerX) * 20;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function cancelRotation(event){
    const image = event.target;
    image.style.transform = 'rotate(0deg)';
  }

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

  if (appLoading) {
    return (
      <div className="App-container">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="App-container">
      {!gameStarted && <LandingPage setGameStarted={setGameStarted} onClick={() => setGameStarted(true)} />}
      {!selectedImage && gameStarted && (
        <Thumbnails handleThumbnailClick={handleThumbnailClick} handleMouseMove={rotateImage} handleMouseLeave={cancelRotation}/>
      )}
      {selectedImage && (
        <main className="gameplay">
          <ScoreDisplay score={score} highScore={highScore} />
          <DisplayImage
            shuffledImages={shuffledImages}
            loading={loading}
            alreadyClicked={alreadyClicked}
            onImageClick={handleImageClick}
          />
        </main>
      )}
      {(alreadyClicked || score === 30) && (
        <GameStatus
          alreadyClicked={alreadyClicked}
          score={score}
          ref={dialogRef}
          restart={restart}
          endGame={endGame}
        />
      )}
    </div>
  );
}

export default App;
