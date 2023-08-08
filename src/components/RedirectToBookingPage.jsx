import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import redirects from './redirects.json'; // Import the JSON configuration

export default function RedirectToBookingPage() {
  const { propertyId } = useParams(); // Get the property ID from the URL parameter

  useEffect(() => {
    console.log('RedirectToBookingPage component triggered'); // Log that the component is triggered

    if (propertyId && redirects[propertyId]) {
      console.log('Redirecting to:', redirects[propertyId]); // Log the redirection URL
      // Asynchronously redirect to the Booking.com URL from the configuration
      setTimeout(() => {
        window.location.replace(redirects[propertyId]);
      }, 0);
    } else {
      console.log('Property ID not found or redirection URL not available');
      // Redirect to Booking.com main page with your affiliate ID
      setTimeout(() => {
        window.location.replace(`https://www.booking.com/index.html?aid=8066595`);
      }, 0);
    }
  }, [propertyId]);

  return null; // The component doesn't render anything
}
