
import { Link } from "react-router-dom";



export default function MainSection() {
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

  

  return (
    <section className="bg-[#f5f5f5] text-slate-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
          Get Inspired by Popular Destinations in France
        </h2>
        {/* ...other code */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularDestinations.map((destination) => (
            <Link
              key={destination}
              to={`/${destination.replace(/\s+/g, '-').replace(/[^\w-']/g, '').toLowerCase()}`} // Generate the path
              className="bg-white text-slate-900 py-3 px-6 rounded-md hover:bg-teal-800 hover:text-white transition duration-200"
            >
              {destination}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}