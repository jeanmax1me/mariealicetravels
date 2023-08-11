import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RedirectToBookingPage from './components/RedirectToBookingPage';
import redirects from './components/redirects.json';
import BookingWidget from './components/BookingWidget';


export default function App() {
 

  return (
    <Router>
      <div className="max-h-screen">
        <Header />
        <BookingWidget />
        <Routes>
    {/*      <Route path="/" element={<MainSection />} />

          {popularDestinations.map((destination, index) => (
            <Route
              key={destination}
              path={`/${destinationPaths[index]}`}
              element={<DestinationPage destinationData={destinationsData[destinationPaths[index]]} />} // Pass the data directly
            />
          ))} */}
      
       {Object.keys(redirects).map((propertyId) => (
            <Route
              key={propertyId}
              path={`/${propertyId}`}
              element={<RedirectToBookingPage propertyId={propertyId} />}
            />
            ))} 
       </Routes> 
        <Footer />
      </div>
    </Router>
  );
}
