"use client"

import React, { useState, useEffect } from 'react'
import FiltersModal from './components/FiltersModal';
import ReactDOM from 'react-dom';

const dateIdeas = [
  {
    date: "Go to the beach",
    description: "This is a great idea for a date. You can go to the beach and have a great time together.", 
    price: 0
  },
  {
    date: "Go to the movies",
    description: "This is a great idea for a date. You can go to the movies and have a great time together.",
    price: 2
  },
  {
    date: "Go to a restaurant",
    description: "This is a great idea for a date. You can go to a restaurant and have a great time together.",
    price: 3
  },
  {
    date: "Go for a walk",
    description: "This is a great idea for a date. You can go for a walk and have a great time together.",
    price: 0
  }
];

export default function Home() {
  const [dateIdea, setDateIdea] = useState(0); // Initialize with a valid index
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  // Randomize date idea on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length); // Corrected to use array length
    setDateIdea(randomIndex);
  }, []);

  const renderPrice = (price) => {
    // render the price in $ signs
    return price > 0 ? `(${'$'.repeat(price)})` : '(Free)';
  }

  const handleFilters = () => {
    // open filters modal
    // This is a client-side only route, so we can import the component directly
    // and render it on the client
    const modal = document.createElement('div');
    document.body.appendChild(modal)
    ReactDOM.render(<FiltersModal />, modal);

  }


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: '768px' }}> 
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Find the perfect date</h2>
          <p className="mt-2 text-sm text-gray-600">
            Go through the cards to find the perfect date for you.
          </p>
        </div>
        <div className="mt-10 relative flex justify-center">
          <div className="absolute w-96 h-96 bg-gray-200 rounded-lg shadow-lg transform -rotate-3" style={{ zIndex: 1, marginTop: '1px', marginLeft: '17px' }}></div>
          <div className="w-96 h-96 bg-gray-50 rounded-lg p-6 flex flex-col justify-center text-center shadow-xl relative z-20" onClick={handleCardClick}>
            <h3 className="text-xl font-bold text-gray-900">{dateIdeas[dateIdea].date}</h3>
            {showDetails ? (
              <p className="mt-2 text-sm text-gray-600">
                {dateIdeas[dateIdea].description} {renderPrice(dateIdeas[dateIdea].price)}
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-600">
                Click to see details
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2"> 
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
            onClick={() => setDateIdea((dateIdea + 1) % dateIdeas.length)}
          >
            Next idea
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
            onClick={handleFilters}
          >
            Adjust filters
          </button>
        </div>
      </div>
    </div>
  );
}
