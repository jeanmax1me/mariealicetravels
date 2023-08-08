import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import redirects from './redirects.json'; // Import the JSON configuration

export default function RedirectToBookingPage() {
  const { propertyId } = useParams(); // Get the property ID from the URL parameter

  useEffect(() => {
    if (propertyId && redirects[propertyId]) {
      // Redirect to the Booking.com URL from the configuration
      window.location.href = redirects[propertyId];
    } else {
      // Handle cases where the property ID is not found
      console.error(`Property ID "${propertyId}" not found in redirects configuration.`);
    }
  }, [propertyId]);

  return null; // The component doesn't render anything
}
