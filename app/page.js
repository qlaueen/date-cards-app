"use client";
import React, { useState, useEffect } from 'react';
import FiltersModal from './components/FiltersModal';

// import date ideas form the json
import dateIdeas from './data/date-ideas.json';

export default function Home() {
  const [dateIdeaIndex, setDateIdeaIndex] = useState(0); // Initialize with a valid index
  const [showDetails, setShowDetails] = useState(false);
  const [priceFilter, setPriceFilter] = useState(null); // null means no filter applied
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length); // Corrected to use array length
    setDateIdeaIndex(randomIndex);
  }, []);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const handleFilterUpdate = (newPriceFilter) => {
    setPriceFilter(newPriceFilter);
    setIsFiltersModalOpen(false); // Close the modal once the filter is updated
  };

  const handleFilters = () => {
    setIsFiltersModalOpen(true);
  };

  const renderPrice = (price) => {
    return price > 0 ? `(${'$'.repeat(price)})` : '(Free)';
  };

  // Apply the filter
  const filteredDateIdeas = dateIdeas.filter(idea => priceFilter === null || idea.price <= priceFilter);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: '768px' }}> 
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-darkerPink">Find the perfect date idea</h2>
          <p className="mt-2 text-md text-black">
            Go through the cards to find the perfect date for you.
          </p>
        </div>
        <div className="mt-10 relative flex justify-center">
          {filteredDateIdeas.length > 0 ? (
            <>
              <div className="absolute w-96 h-96 bg-white rounded-lg shadow-lg transform -rotate-3" style={{ zIndex: 1, marginTop: '1px', marginLeft: '17px' }}></div>
              <div className="w-96 h-96 bg-lighterPink rounded-lg p-6 flex flex-col justify-center text-center shadow-xl relative z-10" onClick={handleCardClick}>
                <h3 className="text-xl font-bold text-black">{filteredDateIdeas[dateIdeaIndex % filteredDateIdeas.length].date}</h3>
                {showDetails ? (
                  <>
                    <p className="mt-2 text-sm text-black">
                      {filteredDateIdeas[dateIdeaIndex % filteredDateIdeas.length].description}
                    </p>
                    <div className="mt-2 text-lg text-darkPink font-bold">
                      {renderPrice(filteredDateIdeas[dateIdeaIndex % filteredDateIdeas.length].price)}
                    </div>
                  </>
                ) : (
                  <p className="mt-2 text-sm text-black">
                    Click to see details
                  </p>
                )}
              </div>
            </>
          ) : (
            <p>No date ideas match your filters. Please adjust your filters.</p>
          )}
        </div>
        <div className="flex justify-center mt-10">
          <div className="heart"></div>
        </div>
        <div className="mt-8 flex justify-center gap-2"> 
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-darkPink px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-lightPink sm:ml-3 sm:w-auto"
            onClick={() => setDateIdeaIndex(Math.floor(Math.random() * dateIdeas.length))}
          >
            Next idea
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-darkPink px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-lightPink sm:ml-3 sm:w-auto"
            onClick={handleFilters}
          >
            Adjust filters
          </button>
        </div>
      </div>
      {isFiltersModalOpen && <FiltersModal onUpdate={handleFilterUpdate} onClose={() => setIsFiltersModalOpen(false)} />}
    </div>
  );
}
