# Memory Card Game

A React-based memory card game where players test their memory by clicking on images without repeating any selection. The game features dynamic themes, score tracking, and responsive design.

## Game Overview

The Memory Card Game challenges players to click on different images without selecting the same image twice. Each successful click increases your score, but clicking a previously selected image ends the game. The goal is to achieve a perfect score by clicking all 10 images exactly once.

## Features

- **Dynamic Themes**: Choose from various image categories (animals, nature, technology, etc.)
- **Score Tracking**: Real-time score display with persistent high score storage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: 3D hover effects and smooth transitions
- **Game States**: Landing page, theme selection, gameplay, and results modal
- **Error Handling**: Graceful handling of API failures with retry functionality
- **Loading States**: Smooth loading experience with custom loading screen

## Live Demo

[Play the Memory Card Game](your-deployment-url-here)

## Technologies Used

- **React 18** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with Flexbox and Grid
- **Unsplash API** - Dynamic image fetching
- **Local Storage** - High score persistence
- **HTML5 Dialog API** - Modal dialogs

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/memory-card-game.git
   cd memory-card-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .config.js file in root directory
   echo "API_KEY=your_unsplash_access_key_here" > .config.js
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🔑 API Setup

1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your Access Key
4. Edit the config.js file and replace the API_KEY variable

## How to Play

1. **Start**: Click "Get Started" on the landing page
2. **Choose Theme**: Select an image category from the thumbnails
3. **Play**: Click on images to score points
4. **Remember**: Don't click the same image twice!
5. **Win**: Click all images exactly once for a perfect score
6. **Restart**: Use the dialog buttons to play again or choose a new theme

## Responsive Design

The game adapts to different screen sizes:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Optimized spacing and touch interactions
- **Mobile**: Single column layout for portrait mode

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Main styles
│   ├── Reset.css            # CSS reset
│   ├── ThemeSelector.jsx    # Theme selection component
│   ├── DisplayImage.jsx     # Game images display
│   ├── Score.jsx            # Score display component
│   ├── GameStatus.jsx       # Game end modal
│   ├── LandingPage.jsx      # Welcome screen
│   ├── LoadingScreen.jsx    # Loading animation
│   └── ImageFetcher.js      # Custom hook for API calls
└── index.js                 # Application entry point
```

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🎨 Customization

### Adding New Themes
Edit the themes array in `ThemeSelector.jsx`:
```javascript
Import the image
Add the image to the images object 
import newImage from '../example'
const images = {"Api search term":newImage}
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Unsplash](https://unsplash.com) for providing beautiful, free images
- [The Odin Project](https://www.theodinproject.com) for the project inspiration
- React community for excellent documentation and resources

## 📞 Contact

- GitHub: [Ayoroq](https://github.com/Ayoroq)
- Email: Ayoroq@gmail.com

---

**Enjoy playing the Memory Card Game! **