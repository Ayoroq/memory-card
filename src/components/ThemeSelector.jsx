import catImage from "../assets/thumbnail-images/cat.jpg";
import dogImage from "../assets/thumbnail-images/dog.jpg";
import owlImage from "../assets/thumbnail-images/owl.jpg";
import deerImage from "../assets/thumbnail-images/deer.jpg";
import carImage from "../assets/thumbnail-images/car.jpg";

const images = {
  cat: catImage,
  dog: dogImage,
  owl: owlImage,
  deer: deerImage,
  car: carImage,
};

export default function Thumbnails({ handleThumbnailClick, handleMouseMove, handleMouseLeave}) {
  return (
    <ul className="thumbnail-container">
      {Object.keys(images).map((key) => (
        <li key={key} className="thumbnail">
          <img
            src={images[key]}
            alt={key}
            className="thumbnail-image"
            id={key}
            onClick={handleThumbnailClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </li>
      ))}
    </ul>
  );
}