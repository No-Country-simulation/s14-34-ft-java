import React, { useEffect, useRef } from 'react';

function LocationMap() {
    const mapRef = useRef(null);
    useEffect(() => {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDlg0HXmBuduZ9U9zLCr5e8TDMzzZUtHiQ&callback=console.debug&libraries=maps,marker&v=beta`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        googleMapsScript.addEventListener('load', initializeMap);
        document.body.appendChild(googleMapsScript);
    }, []);
    const initializeMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
            zoom: 12,
        });
        // Add your location-based features here
    };
    return (
        <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
    );
}
export default LocationMap;