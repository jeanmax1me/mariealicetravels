import { useParams } from 'react-router-dom'; // Import useParams
import PlaceCard from './PlaceCard';
import antibesData from './destinations/antibes'; // Import data for Antibes

export default function DestinationPage() {
  const { destination } = useParams(); // Get the current destination from the URL

  // Define data sources for each destination (e.g., Antibes, Bordeaux, etc.)
  const destinationsData = {
    'antibes': antibesData,
    // Add other destinations here
  };

  const selectedDestinationData = destinationsData[destination];

  return (
    <section className="bg-[#f5f5f5] text-slate-900 py-16">
      <div className="container mx-auto text-center">
        {selectedDestinationData.map((place, index) => (
         <PlaceCard key={index} place={place} /> 
         
        ))}
      </div>
    </section>
  );
}