# Image Search App

A simple React app to search and display images.
https://find-img-app.netlify.app/

## How to Use

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Replace your UNSPLASH API KEY**
- go to file `./src/API/searchApi.js` and replace `YOUR_UNSPLASH_ACCESS_KEY` with your unsplash API key. 

3. **Start the App**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Go to `http://localhost:5173`
   - Type a search term in the search box
   - Click "Search" to find images

## Project Structure

```
src/
├── components/
│   ├── searchBar.jsx      # Search input and button
│   ├── searchBar.css      # Search bar styling
│   ├── imageList.jsx      # Image display component
│   └── imageList.css      # Image grid styling
├── API/
│   └── searchApi.js       # API calls for image search
├── App.jsx                # Main app component
├── App.css                # App layout styling
├── index.css              # Global styles
└── main.jsx               # App entry point
```

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Start searching for images!
