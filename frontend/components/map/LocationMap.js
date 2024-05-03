//  AIzaSyDlg0HXmBuduZ9U9zLCr5e8TDMzzZUtHiQ
//  AIzaSyD6ljpKkV63qT-dF6mPEofKqaeGUTAG0iA
import React, { useEffect, useRef } from 'react';

function LocationMap() {
    const mapRef = useRef(null);
    useEffect(() => {
        const googleMapsScript = document.createElement('script'); 
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD6ljpKkV63qT-dF6mPEofKqaeGUTAG0iA&callback=console.debug&libraries=maps,marker&v=beta`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        googleMapsScript.addEventListener('load', initializeMap);
        document.body.appendChild(googleMapsScript);
    }, []);
    const initializeMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: -34.603722, lng: -58.381592 }, // Centro en Buenos Aires
            zoom: 12,
        });
        // Add your location-based features here
    };
    return (
        <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
    );
}
export default LocationMap;