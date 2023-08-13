import { useState, useEffect } from 'react';

const HeaderCarousel = () => {
  const headerThemes = [
    {
      gradient: 'from-[#a8c0ff] to-[#3f2b96]',  
      title: 'Immerse in Diverse Cultures',
      subtitle: 'Explore Rich Traditions and Local Flavors',
      description: "Discover the World's Cultural Wonders and Expand Your Horizons!",
    },
    {
      gradient: 'from-[#8ACBCC] via-[#67A2A4] to-[#448B86]',
      title: 'Navigate Vibrant Cities',
      subtitle: 'Dive into Urban Adventures and City Life',
      description: 'Uncover the Charms of Metropolitan Areas and Experience Urban Delights!',
    },
    {
      gradient: 'from-[#2E857C] via-[#60A493] to-[#92C7AB]',
      title: 'Nature Retreat',
      subtitle: 'Reconnect with Nature and Find Tranquility',
      description: 'Escape to Serene Environments and Rejuvenate Your Soul!',
    },
    {
      gradient: 'from-[#91A2FF] via-[#788DFF] to-[#5F79FF]',
      title: 'Dreamy Skies',
      subtitle: 'Gaze at the Vast Sky',
      description: 'Find Inspiration in the Ever-Changing Colors of the Horizon!',
    },
    {
      gradient: 'from-[#FFD699] via-[#FFC266] to-[#FFB133]',
      title: 'Sunset Serenity',
      subtitle: 'Witness Breathtaking Sunsets',
      description: 'Marvel at the Colors of the Setting Sun and Feel the Peaceful Atmosphere!',
    },
    {
      gradient: 'from-[#5EC4B7] via-[#48BFAE] to-[#32B49F]',
      title: 'Tranquil Waters',
      subtitle: 'Reflect by Calm Lakes and Rivers',
      description: 'Experience Serenity as You Embrace the Stillness of Water!',
    },
    {
      gradient: 'from-[#eacda3] to-[#d6ae7b]',
      title: 'Conquer Majestic Peaks',
      subtitle: 'Experience the Thrill of High Altitudes',
      description: 'Reach New Heights and Embrace the Beauty of Mountains!',
    },
    {
      gradient: 'from-[#FFD699] via-[#FFC266] to-[#FFB133]',
      title: 'Coastal Escapes',
      subtitle: 'Explore Beautiful Coastal Landscapes',
      description: 'Experience the Tranquility of the Ocean Waves and Sandy Shores!',
    },
    {
      gradient: 'from-[#654ea3] to-[#eaafc8]', 
      title: 'Adventures Await',
      subtitle: 'Embark on Exciting Journeys',
      description: 'Discover New Paths and Create Unforgettable Memories!',
    },
    {
      gradient: 'from-[#ee9ca7] to-[#ffdde1]',  
      title: 'Culinary Delights',
      subtitle: 'Savor Mouthwatering Flavors',
      description: 'Indulge in Gastronomic Experiences from Around the World!',
    },
  ];
      
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % headerThemes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTheme = headerThemes[currentThemeIndex];

  return (
    <div className={`font-mts bg-gradient-to-r ${currentTheme.gradient} relative`}>
      <div className="container mx-auto text-white py-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">{currentTheme.title}</h1>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{currentTheme.subtitle}</h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl">{currentTheme.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
