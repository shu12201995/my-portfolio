# Private School Finder - Setup Instructions

## Overview
This application allows users to select any city and find all private schools in that area using Google Maps integration.

## Features
- 🗺️ Interactive Google Maps with school markers
- 🏙️ City selection dropdown with major Indian cities
- 🔍 Real-time search and filtering of schools
- 📍 Detailed school information (name, address, rating)
- 📱 Responsive design for mobile and desktop
- 🖼️ School photos from Google Places API

## Setup Instructions

### 1. Google Maps API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Configure API Key
1. Open `/workspace/src/config/googleMaps.js`
2. Replace `'YOUR_GOOGLE_MAPS_API_KEY'` with your actual API key
3. Also update the API_KEY in `/workspace/src/components/SchoolFinder/SchoolFinder.jsx`

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Application
```bash
npm start
```

## How to Use

1. **Select a City**: Choose any city from the dropdown menu
2. **View Schools**: The map will automatically show all private schools in the selected city
3. **Search Schools**: Use the search box to filter schools by name or address
4. **Get Details**: Click on map markers or school cards to see detailed information
5. **View Photos**: School photos are displayed when available

## Technical Details

### Components
- `SchoolFinder.jsx` - Main component with Google Maps integration
- `SchoolFinder.css` - Styling and responsive design
- `googleMaps.js` - Configuration file for API settings

### APIs Used
- **Google Maps JavaScript API** - For map display and interaction
- **Google Places API** - For school search and details
- **Google Geocoding API** - For city coordinate lookup

### Key Features
- Real-time school search using Google Places Text Search
- Interactive markers with info windows
- Responsive grid layout for school cards
- Search and filter functionality
- Mobile-friendly design

## Troubleshooting

### Common Issues
1. **"Error loading Google Maps"** - Check your API key and ensure required APIs are enabled
2. **No schools found** - Verify Places API is enabled and has proper billing setup
3. **Map not loading** - Check browser console for API key errors

### API Limits
- Google Places API has usage limits
- For production use, you may need to set up billing
- Consider implementing caching for better performance

## Customization

### Adding More Cities
Edit the `cities` array in `SchoolFinder.jsx` to add more cities.

### Styling
Modify `SchoolFinder.css` to change the appearance and layout.

### Search Terms
Modify the search query in the `searchSchools` function to search for different types of educational institutions.

## Support
For issues related to Google Maps API, refer to the [Google Maps Platform documentation](https://developers.google.com/maps/documentation).