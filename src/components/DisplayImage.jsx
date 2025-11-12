
export default function DisplayImage({imageData,loading}) {
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