import { useEffect } from 'react';
import redirects from './redirects.json'; // Import the JSON configuration

export default function RedirectToBookingPage({ propertyId }) {
  useEffect(() => {
    const redirectUrl = redirects[propertyId];
    
    if (redirectUrl) {
      // Redirect to the Booking.com URL from the configuration
      window.location.replace(redirectUrl);
    } else {
      // Redirect to Booking.com main page with your affiliate ID
      window.location.replace('https://www.booking.com/index.html?aid=8066595');
    }
  }, [propertyId]);

  return null; // The component doesn't render anything
}