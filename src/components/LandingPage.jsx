import andy from '../assets/landing-page-assets/andy-idea.svg';
import andy2 from '../assets/landing-page-assets/andy-break.svg';
import andy3 from '../assets/landing-page-assets/andy-time.svg';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="name">MEMORY</h1>
      <div className="button-container">
        <button type="button" className="get-started">Get Started</button>
      </div>
      <div className="landing-images">
        <img src={andy} alt="andy-idea" className='andy' />
        <img src={andy2} alt="andy-break" className='andy' />
        <img src={andy3} alt="andy-time" className='andy' />
      </div>
    </div>
  );
}