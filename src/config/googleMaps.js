// Google Maps Configuration
// Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key

export const GOOGLE_MAPS_CONFIG = {
  // Get your API key from: https://console.cloud.google.com/google/maps-apis
  API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY',
  
  // Required APIs that need to be enabled in Google Cloud Console:
  // 1. Maps JavaScript API
  // 2. Places API
  // 3. Geocoding API
  
  // Libraries to load
  libraries: ['places', 'geometry'],
  
  // Map options
  mapOptions: {
    zoom: 12,
    mapTypeId: 'roadmap',
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  }
};

// Instructions for setting up Google Maps API:
/*
1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Create credentials (API Key)
5. Restrict the API key to your domain for security
6. Replace 'YOUR_GOOGLE_MAPS_API_KEY' in this file with your actual API key
7. Also update the API_KEY in SchoolFinder.jsx component

Note: The Places API has usage limits and may require billing setup for production use.
*/