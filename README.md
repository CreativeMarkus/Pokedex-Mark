# Pokédex Web Application

A modern, interactive Pokédex web application built with HTML, CSS, JavaScript, and Bootstrap that displays a comprehensive list of Pokémon fetched from the [PokéAPI](https://pokeapi.co/). Users can browse through Pokémon and view detailed information in an elegant modal interface.

## Features

- 🎯 **Dynamic Data Fetching**: Retrieves real-time Pokémon data from PokéAPI
- 📱 **Responsive Design**: Fully responsive interface using Bootstrap 4
- 🔍 **Interactive Modal**: Click any Pokémon to view detailed information
- 🎨 **Clean UI**: Modern, user-friendly interface with intuitive navigation
- ⚡ **Fast Loading**: Optimized JavaScript for smooth performance
- 🎪 **Pokémon Details**: Displays images, height, weight, types, and abilities

## Project Structure

```
Pokedex-3-/
├── index.html              # Main HTML page
├── css/
│   └── styles.css          # Custom CSS styles
├── js/
│   ├── scripts.js          # Main JavaScript application logic
│   ├── fetch.polyfill.js   # Fetch API polyfill for older browsers
│   └── promise-polyfill.js # Promise polyfill for older browsers
└── README.md               # Project documentation
```

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling and animations
- **Bootstrap 4.3.1** - Responsive framework and UI components
- **JavaScript (ES6+)** - Modern JavaScript with async/await
- **Fetch API** - For HTTP requests to PokéAPI
- **PokéAPI** - RESTful Pokémon data source

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local HTTP server (optional but recommended)

### Installation & Setup

1. **Clone or download** this repository to your local machine
2. **Navigate** to the project directory
3. **Start a local server** (recommended):

   **Option 1: Using Node.js**
   ```bash
   npx http-server -p 8000
   ```

   **Option 2: Using Python**
   ```bash
   python -m http.server 8000
   ```

4. **Open your browser** and navigate to `http://localhost:8000`

### Direct File Access
Alternatively, you can open `index.html` directly in your browser, though some features may not work due to CORS restrictions.

## Usage

1. The application loads with a list of Pokémon from the PokéAPI
2. Click on any Pokémon name to open a modal with detailed information
3. The modal displays:
   - Pokémon image
   - Name and ID
   - Height and weight
   - Type(s)
   - Base stats and abilities
4. Close the modal by clicking the X button or clicking outside the modal

## API Information

This application uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data. The API provides:
- Comprehensive Pokémon database
- No authentication required
- RESTful interface
- JSON response format

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).