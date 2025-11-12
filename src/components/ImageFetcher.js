import { useState, useEffect } from 'react';
import { API_KEY } from "../config";

export default function useFetchImage(query) {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (!query) return;
    
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEY}&count=30&w=300&h=300&fit=crop`
        );
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  return { imageData, loading };
}