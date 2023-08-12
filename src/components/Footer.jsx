import { useState } from "react";


const Footer = () => {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPrivacyPopup(false);
  };
  const handleCloseCookiesPopup = () => {
    setShowCookiesPopup(false);
  };

  return (
    <footer className="bg-white text-black py-6 max-h-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          © MarieAliceTravels 2023. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowPrivacyPopup(true)}
            className="text-sm hover:text-teal-800 transition duration-300"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setShowCookiesPopup(true)}
            className="text-sm hover:text-teal-800 transition duration-300"
          >
            Cookies
          </button>
          <button
            onClick={() => setShowContactPopup(true)}
            className="text-sm hover:text-teal-800 transition duration-300"
          >
            Contact
          </button>
        </div>
      </div>

    {/* Privacy Policy Popup */}



{showPrivacyPopup && (
  <div className="popup-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleClosePopup}>
    <div className="popup-content bg-white p-8 rounded-lg text-black">
      <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        At MarieAliceTravels, we respect your privacy and are committed to protecting your personal information. We want you to feel confident that your privacy is respected and your data is secure when using our website.
      </p>
      <p className="mb-4">
        We want to assure you that we do not collect any personal information from our users, and we do not track your browsing activity. Your privacy is important to us, and we do not engage in any data collection or tracking practices.
      </p>
      <p className="mb-4">
        If you have any questions or concerns about our privacy practices, please feel free to contact us.
      </p>
      <p className="mb-4">
        Thank you for choosing MarieAliceTravels for your travel inspiration and information needs.
      </p>
      {/* Close button */}
      <button onClick={handleClosePopup} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Close
      </button>
    </div>
  </div>
)}


{/* Cookies Popup */}
{showCookiesPopup && (
  <div className="popup-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleCloseCookiesPopup}>
    <div className="popup-content bg-white p-8 rounded-lg text-black" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-4">Cookies</h2>
      <p className="mb-4">
        We do not use cookies or any other tracking mechanisms on our website. Your privacy is important to us.
      </p>
      <button onClick={handleCloseCookiesPopup} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Close
      </button>
    </div>
  </div>
)}
{/* Contact Popup */}
{showContactPopup && (
  <div className="popup-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={() => setShowContactPopup(false)}>
    <div className="popup-content bg-white p-8 rounded-lg text-black" onClick={(e) => e.stopPropagation()}>
      {/* Close button */}
      <button onClick={() => setShowContactPopup(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Main Email */}
      <p className="text-lg font-semibold mb-4">
        For inquiries, please contact us at:
        <br />
        <a href="mailto:mariealicetravel@mail.com" className="text-indigo-600 hover:underline">
          mariealicetravel@mail.com
        </a>
      </p>

      {/* Dev Links */}
      <p className="text-sm mb-2 text-center text-slate-600">website developed by</p>
      <div className="flex justify-center mt-2">
        <a
          href="https://twitter.com/ArteFlannigan"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <img src="TwitterIcon.webp" className="w-6 h-6 text-white hover:text-indigo-600 transition duration-300" alt="Twitter" />
        </a>
      </div>
    </div>
  </div>
)}

    </footer>
  );
};

export default Footer;
