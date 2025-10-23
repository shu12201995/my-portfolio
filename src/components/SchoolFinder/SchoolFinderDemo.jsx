import React, { useState } from 'react';
import './SchoolFinder.css';

const SchoolFinderDemo = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showInstructions, setShowInstructions] = useState(true);

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune',
    'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam'
  ];

  const demoSchools = [
    {
      id: 1,
      name: 'Delhi Public School',
      address: '123 Main Street, ' + selectedCity,
      rating: '4.5',
      type: 'Private School'
    },
    {
      id: 2,
      name: 'Modern School',
      address: '456 Education Lane, ' + selectedCity,
      rating: '4.2',
      type: 'Private School'
    },
    {
      id: 3,
      name: 'St. Mary\'s Convent School',
      address: '789 School Road, ' + selectedCity,
      rating: '4.7',
      type: 'Private School'
    },
    {
      id: 4,
      name: 'International School',
      address: '321 Global Avenue, ' + selectedCity,
      rating: '4.3',
      type: 'Private School'
    }
  ];

  return (
    <div className="school-finder">
      <div className="school-finder-header">
        <h1>Private School Finder</h1>
        <p>Select a city to find all private schools in that area</p>
      </div>

      {showInstructions && (
        <div className="instructions-banner">
          <div className="instructions-content">
            <h3>🚀 Demo Mode</h3>
            <p>
              This is a demo version. To use the full Google Maps integration, 
              please set up your Google Maps API key as described in the setup instructions.
            </p>
            <button 
              onClick={() => setShowInstructions(false)}
              className="close-instructions"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="controls">
        <div className="city-selector">
          <label htmlFor="city-select">Select City:</label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Choose a city...</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="content">
        <div className="map-container demo-map">
          <div className="demo-map-placeholder">
            <h3>🗺️ Google Maps Integration</h3>
            <p>Interactive map will appear here with school markers</p>
            <div className="demo-features">
              <div className="feature">📍 School Markers</div>
              <div className="feature">🔍 Zoom & Pan</div>
              <div className="feature">ℹ️ Info Windows</div>
            </div>
          </div>
        </div>

        <div className="schools-list">
          <h3>
            {selectedCity ? `Private Schools in ${selectedCity} (Demo)` : 'Select a city to view schools'}
          </h3>
          
          {selectedCity ? (
            <div className="schools-grid">
              {demoSchools.map(school => (
                <div key={school.id} className="school-card">
                  <h4>{school.name}</h4>
                  <p className="address">{school.address}</p>
                  <p className="rating">Rating: {school.rating}</p>
                  <div className="demo-photo">
                    <span>📸 School Photo</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">Please select a city to see demo schools</p>
          )}
        </div>
      </div>

      <div className="setup-info">
        <h3>🔧 Setup Required</h3>
        <p>To enable full functionality:</p>
        <ol>
          <li>Get a Google Maps API key from Google Cloud Console</li>
          <li>Enable Maps JavaScript API, Places API, and Geocoding API</li>
          <li>Update the API key in the configuration files</li>
          <li>Replace SchoolFinderDemo with SchoolFinder in App.js</li>
        </ol>
        <p>See <code>SCHOOL_FINDER_SETUP.md</code> for detailed instructions.</p>
      </div>
    </div>
  );
};

export default SchoolFinderDemo;