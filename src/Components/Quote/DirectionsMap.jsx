import React, { useEffect, useState } from "react";

const DirectionsMap = ({ stepOneFormData, setRouteMiles }) => {
  const [distance, setDistance] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_G;
    const origin = stepOneFormData.pickupPostcode;
    const destination = stepOneFormData.dropoffPostcode;

    const loadMap = async () => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const mapElement = document.getElementById("map");
      let map;

      if (!origin || !destination) return;
      // Check if map already exists and remove it
      if (mapElement && mapElement.firstChild) {
        mapElement.removeChild(mapElement.firstChild);
      }

      map = new window.google.maps.Map(mapElement, {
        zoom: 10,
      });
      directionsRenderer.setMap(map);

      const request = {
        origin: origin,
        destination: destination,
        travelMode: "DRIVING",
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);

          // Get the distance in meters
          const distanceInMeters = result.routes[0].legs[0].distance.value;
          // Convert meters to miles
          const distanceInMiles = distanceInMeters * 0.000621371;
          setDistance(distanceInMiles.toFixed(2));
          setRouteMiles(distanceInMiles.toFixed(2));
        }
      });
    };

    window.initMap = loadMap;
  }, [stepOneFormData, setRouteMiles]);

  useEffect(() => {
    const loadScript = () => {
      if (document.getElementById("google-maps-script")) {
        // Script is already loaded
        return;
      }
      const newScript = document.createElement("script");
      newScript.id = "google-maps-script";
      newScript.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_G}&libraries=geometry&callback=initMap`;
      newScript.async = true;
      document.body.appendChild(newScript);
    };

    if (!loaded) {
      loadScript();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div>
      {loaded && <div id={"map"} style={{ height: "250px", width: "100%", marginBottom: "20px" }}></div>}

      {distance && <p className="text-center font-bold">Distance: {distance} miles</p>}
    </div>
  );
};

export default DirectionsMap;
