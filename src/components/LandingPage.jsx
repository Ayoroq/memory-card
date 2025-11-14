import ideaImage from "../assets/landing-page-assets/andy-idea.svg";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="name">PHOTOGRAPH <br/> RECALL</h1>
      <h3 className="description"> A game to test your memory</h3>
      <div className="landing-images">
        <img src={ideaImage} alt="idea" className="idea-image" />
      </div>
    </div>
  );
}
