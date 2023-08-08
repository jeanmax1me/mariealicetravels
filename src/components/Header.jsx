import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    const searchResultsURL = `https://www.booking.com/searchresults.en.html?ss=${encodeURIComponent(
      searchQuery
    )}&aid=8066595`;
    window.open(searchResultsURL, '_blank');
  };

  return (
    <div className="h-[24rem] font-mts bg-gradient-to-r from-[#0f3057] via-[#2a6496] to-[#4f87b4] relative">
      <div className="container mx-auto text-gray-300 pt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Find Your Dream Getaway
        </h1>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
            Seeking Your Next Retreat?
          </h2>
          <h3 className="text-base md:text-lg lg:text-xl">
            Explore Top Stays and Get Inspired by Fellow Adventurers!
          </h3>
        </div>

        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center mb-10 z-10"
            action="https://www.booking.com/searchresults.en.html?aid=8066595"
            method="get"
            target="_blank" // Open the results in a new tab
          >
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="ss" // The "ss" parameter is used by Booking.com for search query
                placeholder="Search for a city or place..."
                className="w-full h-12 rounded-md rounded-r-none pl-3 pr-6 font-mts text-slate-700 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600"
              />
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300 z-10">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
