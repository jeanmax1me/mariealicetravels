import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import PlaceCard from './components/PlaceCard';
import RedirectToBookingPage from './components/RedirectToBookingPage';


import antibesData from './destinations/antibes';
import bordeauxData from './destinations/bordeaux';
import cannesData from './destinations/cannes';
import arcachonData from './destinations/arcachon';
import chamonixData from './destinations/chamonix-mont-blanc';
import lesMenuiresData from './destinations/les-menuires';
import lyonData from './destinations/lyon';
import marseilleData from './destinations/marseille';
import niceData from './destinations/nice';
import parisData from './destinations/paris';


export default function App() {
  const popularDestinations = [
    "Antibes",
    "Bordeaux",
    "Cannes",
    "Arcachon",
    "Chamonix-Mont-Blanc",
    "Les Menuires",
    "Lyon",
    "Marseille",
    "Nice",
    "Paris",
  ];

  const destinationPaths = popularDestinations.map(destination =>
    destination.replace(/\s+/g, '-').replace(/[^\w-']/g, '').toLowerCase()
  );
  

  const destinationsData = {
    'antibes': antibesData,
    'bordeaux': bordeauxData,
    'cannes': cannesData,
    'arcachon': arcachonData,
    'chamonix-mont-blanc': chamonixData,
    'les-menuires': lesMenuiresData,
    'lyon': lyonData,
    'marseille': marseilleData,
    'nice': niceData,
    'paris': parisData,
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />

          {popularDestinations.map((destination, index) => (
            <Route
              key={destination}
              path={`/${destinationPaths[index]}`}
              element={<DestinationPage destinationData={destinationsData[destinationPaths[index]]} />} // Pass the data directly
            />
          ))}
        <Route path="/sunshine13" element={<RedirectToBookingPage propertyId="sunshine13" />} />
      <Route path="/cannesfelixfaure" element={<RedirectToBookingPage propertyId="cannesfelixfaure" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


function DestinationPage({ destinationData }) {
  return (
    <section className="bg-[#f5f5f5] text-slate-900 py-16">
      <div className="container mx-auto text-center">
        {destinationData.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </section>
  );
}