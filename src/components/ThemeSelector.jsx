import catImage from "../assets/cat.jpg";
import dogImage from "../assets/dog.jpg";
import owlImage from "../assets/owl.jpg";
import deerImage from "../assets/deer.jpg";

const images = {
  cat: catImage,
  dog: dogImage,
  owl: owlImage,
  deer: deerImage,
};

export default function Thumbnails({handleThumbnailClick}) {
  return (
    <div className="thumbnail-container">
      {Object.keys(images).map((key) => (
        <img
          key={key}
          src={images[key]}
          alt={key}
          className="thumbnail"
          id={key}
          onClick={handleThumbnailClick}
        />
      ))}
    </div>
  );
}
