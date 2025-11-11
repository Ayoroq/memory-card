import { useState } from 'react';
import { API_KEY } from "../config";

export default function useFetchImage() {
  const [loading, setLoading] = useState(false);

  const fetchImage = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEY}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchImage, loading };
}
