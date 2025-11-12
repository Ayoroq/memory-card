
export default function DisplayImage({imageData,loading}) {
    // This is the Fisher-Yates shuffle.
   function shuffleImage(imageData){
    for (let i = imageData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageData[i], imageData[j]] = [imageData[j], imageData[i]];
    }
    return imageData.slice(0,10)
   }
   imageData = shuffleImage(imageData)
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!imageData) {
      return  null;
    }

    return (
      <ul className="image-container">
        {imageData.map((image) => (
        <li key={image.id} className="image-item">
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className="image"
          />
        </li>
        ))}
      </ul>
    );
  }