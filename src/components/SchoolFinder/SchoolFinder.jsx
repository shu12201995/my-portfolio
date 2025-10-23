import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { GOOGLE_MAPS_CONFIG } from '../../config/googleMaps';
import './SchoolFinder.css';

const SchoolFinder = () => {
  const [map, setMap] = useState(null);
  const [schools, setSchools] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSchools, setFilteredSchools] = useState([]);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Indian cities list
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune',
    'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam',
    'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
    'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar', 'Varanasi', 'Srinagar',
    'Aurangabad', 'Navi Mumbai', 'Solapur', 'Vijayawada', 'Kolhapur', 'Amritsar', 'Nashik',
    'Sangli', 'Malegaon', 'Ulhasnagar', 'Jalgaon', 'Akola', 'Latur', 'Ahmadnagar', 'Dhule',
    'Ichalkaranji', 'Parbhani', 'Jalna', 'Bhusawal', 'Panvel', 'Satara', 'Beed', 'Yavatmal',
    'Kamptee', 'Gondia', 'Chandrapur', 'Achalpur', 'Osmanabad', 'Nanded-Waghala', 'Wardha',
    'Udgir', 'Hinganghat'
  ];

  // Google Maps API key from configuration
  const API_KEY = GOOGLE_MAPS_CONFIG.API_KEY;

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <div className="loading">Loading Google Maps...</div>;
      case Status.FAILURE:
        return <div className="error">Error loading Google Maps. Please check your API key.</div>;
      default:
        return null;
    }
  };

  const initializeMap = (center) => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 12,
        mapTypeId: 'roadmap'
      });
      setMap(newMap);
    }
  };

  const searchSchools = async (city) => {
    if (!map) return;

    setIsLoading(true);
    setSchools([]);
    setFilteredSchools([]);

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      query: `private schools in ${city}`,
      fields: ['name', 'geometry', 'formatted_address', 'rating', 'place_id', 'photos'],
      locationBias: map.getCenter()
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        const schoolData = results.map(place => ({
          id: place.place_id,
          name: place.name,
          address: place.formatted_address,
          rating: place.rating || 'N/A',
          location: place.geometry.location,
          photos: place.photos
        }));

        setSchools(schoolData);
        setFilteredSchools(schoolData);

        // Add markers to map
        schoolData.forEach(school => {
          const marker = new window.google.maps.Marker({
            position: school.location,
            map: map,
            title: school.name,
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new window.google.maps.Size(30, 30)
            }
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px;">
                <h3>${school.name}</h3>
                <p><strong>Address:</strong> ${school.address}</p>
                <p><strong>Rating:</strong> ${school.rating}</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          markersRef.current.push(marker);
        });

        // Fit map to show all markers
        if (schoolData.length > 0) {
          const bounds = new window.google.maps.LatLngBounds();
          schoolData.forEach(school => {
            bounds.extend(school.location);
          });
          map.fitBounds(bounds);
        }
      }
      setIsLoading(false);
    });
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    
    // Get coordinates for the city using geocoding
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: city }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        initializeMap(location);
        searchSchools(city);
      }
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredSchools(schools);
    } else {
      const filtered = schools.filter(school =>
        school.name.toLowerCase().includes(query.toLowerCase()) ||
        school.address.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSchools(filtered);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredSchools(schools);
  };

  return (
    <div className="school-finder">
      <div className="school-finder-header">
        <h1>Private School Finder</h1>
        <p>Select a city to find all private schools in that area</p>
      </div>

      <div className="controls">
        <div className="city-selector">
          <label htmlFor="city-select">Select City:</label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => handleCitySelect(e.target.value)}
            disabled={isLoading}
          >
            <option value="">Choose a city...</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {selectedCity && (
          <div className="search-box">
            <input
              type="text"
              placeholder="Search schools by name or address..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery && (
              <button onClick={clearSearch} className="clear-btn">Clear</button>
            )}
          </div>
        )}
      </div>

      <div className="content">
        <div className="map-container">
          <Wrapper apiKey={API_KEY} render={render}>
            <div ref={mapRef} className="map" />
          </Wrapper>
        </div>

        <div className="schools-list">
          <h3>
            {selectedCity ? `Private Schools in ${selectedCity}` : 'Select a city to view schools'}
            {isLoading && <span className="loading-indicator">Loading...</span>}
          </h3>
          
          {filteredSchools.length > 0 ? (
            <div className="schools-grid">
              {filteredSchools.map(school => (
                <div key={school.id} className="school-card">
                  <h4>{school.name}</h4>
                  <p className="address">{school.address}</p>
                  <p className="rating">Rating: {school.rating}</p>
                  {school.photos && school.photos.length > 0 && (
                    <img
                      src={school.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 })}
                      alt={school.name}
                      className="school-photo"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : selectedCity && !isLoading ? (
            <p className="no-results">No private schools found in {selectedCity}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SchoolFinder;