import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';


export default function App() {
  const popularDestinations = [
    "Antibes",
    "Bordeaux",
    "Cannes",
    "Cap d'Agde",
    "Chamonix-Mont-Blanc",
    "Les Menuires",
    "Lyon",
    "Marseille",
    "Nice",
    "Paris",
  ];

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />

          {popularDestinations.map((destination) => (
            <Route
              key={destination}
              path={`/${destination.toLowerCase()}`}
              element={<DestinationPage destinationData={destination.toLowerCase()} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
function DestinationPage({ destinationData }) {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    import(`./destinations/${destinationData}.js`)
      .then((module) => {
        setData(module.default);
      })
      .catch((error) => {
        console.error('Error loading destination data:', error);
      });
  }, [destinationData]);

  return (
    <section className="bg-[#f5f5f5] text-slate-900 py-16">
      <div className="container mx-auto text-center">
        {data.map((place, index) => (
          <div key={index} className="my-8">
            <img
              src={place.imageUrl}
              alt={place.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h4 className="text-xl font-semibold mb-1">{place.title}</h4>
            <p className="text-gray-600 mb-1">{place.location}</p>
            <p className="text-yellow-500 mb-1">Rating: {place.rating}</p>
            <p className="mb-1">{place.price}</p>
            <a
              href={place.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Visit Booking.com
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
