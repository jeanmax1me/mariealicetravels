import { useEffect } from "react";


export default function BookingWidget() {
useEffect(() => {
    console.log('Header useEffect triggered'); // Log when useEffect is triggered

    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.booking.com/affiliate/prelanding_sdk';
    script.async = true;

    // Define a callback function to initialize the widget
    script.onload = () => {
      console.log('Booking.com script loaded'); // Log when Booking.com script is loaded

      (function () {
        console.log('BookingAffiliateWidget initialized'); // Log when BookingAffiliateWidget is initialized

        var BookingAffiliateWidget = new Booking.AffiliateWidget({
          iframeSettings: {
            selector: 'bookingAffiliateWidget_2f05011e-3f32-432f-b0ff-7ba9ad66cc66',
            responsive: true,
          },
          widgetSettings: {}
        });
      })();
    };

    // Append the script to the document head
    document.head.appendChild(script);
  }, []);

  console.log('Header component rendered');

  return (
      <div className="min-h-[350px] lg:mx-64" id="bookingAffiliateWidget_2f05011e-3f32-432f-b0ff-7ba9ad66cc66">&nbsp;</div>
  );
}