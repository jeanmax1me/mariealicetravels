

const PlaceCard = ({ place }) => {
  const randomImageNumber = Math.floor(Math.random() * 7) + 1;
  const imageUrl = `/room${randomImageNumber}.jpg`;
  const bookingAffiliateLink = "https://www.booking.com/index.html?aid=8066595";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row">
      <img src={imageUrl} alt={place.title} className="w-44 aspect-[1.052/1] object-cover mb-2" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{place.title}</h3>
        <p className="text-gray-500 text-sm mb-1">{place.location}</p>
        <p className="text-indigo-600 font-semibold mb-1">{place.rating} / 10</p>
        <p className="text-gray-700 mb-2">Average Price: {place.price} per night</p>
      </div>
      <a
        href={bookingAffiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:underline transition duration-300"
      >
        Book Now on Booking.com
      </a>
    </div>
  );
};

export default PlaceCard;
