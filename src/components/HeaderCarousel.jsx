import { useState, useEffect } from 'react';

const HeaderCarousel = () => {
    const headerThemes = [
        {
          gradient: 'from-[#B2B7FF] via-[#8B94E8] to-[#646CCF]',
          title: 'Conquer Majestic Peaks',
          subtitle: 'Experience the Thrill of High Altitudes',
          description: 'Reach New Heights and Embrace the Beauty of Mountains!',
        },
        {
          gradient: 'from-[#FF9C98] via-[#FF7B72] to-[#FF5A4C]',
          title: 'Immerse in Diverse Cultures',
          subtitle: 'Explore Rich Traditions and Local Flavors',
          description: "Discover the World's Cultural Wonders and Expand Your Horizons!",
        },
        {
          gradient: 'from-[#2E857C] via-[#60A493] to-[#92C7AB]',
          title: 'Nature Retreat',
          subtitle: 'Reconnect with Nature and Find Tranquility',
          description: 'Escape to Serene Environments and Rejuvenate Your Soul!',
        },
        {
          gradient: 'from-[#8ACBCC] via-[#67A2A4] to-[#448B86]',
          title: 'Navigate Vibrant Cities',
          subtitle: 'Dive into Urban Adventures and City Life',
          description: 'Uncover the Charms of Metropolitan Areas and Experience Urban Delights!',
        },
      ];
      
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % headerThemes.length);
    }, 4000);

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
