import { useState } from "react";
import { Link } from "react-router-dom";


export default function MainSection() {
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

  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section className="bg-[#f5f5f5] text-slate-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
          Get Inspired by Popular Destinations in France
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl mb-6">
          (based on the number of reservations in the past 30 days)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularDestinations.map((destination) => (
            <Link
              key={destination}
              to={`/${destination.toLowerCase()}`}
              className="bg-white text-slate-900 py-3 px-6 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              {destination}
            </Link>
          ))}
        </div>

        {/* Render selected destination details */}
        {selectedDestination && (
          <div>
            {selectedDestination.map((place, index) => (
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
                  Book on Booking.com
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

{/*function getDestinationData(destination) {
  switch (destination) {
    case "Antibes":
      return antibesData; // Return data for Antibes (update for other destinations)
    // Add cases for other destinations
    default:
      return [];
  }
}
*/}