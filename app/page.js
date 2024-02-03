"use client"

import React, { useState, useEffect } from 'react'

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
    // render the price in $
    return price > 0 ? `($${price})` : "(Free)";
  }

  const renderDescription = (description, price) => {
    return `${description} ${renderPrice(price)}`;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: '768px' }}> 
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Find the perfect date</h2>
          <p className="mt-2 text-sm text-gray-600">
            Go through the cards to find the perfect date for you.
          </p>
        </div>
        <div className="mt-10 relative flex justify-center">
          {/* Adjusted sizes and positions for the bigger card appearance */}
          <div className="absolute w-96 h-96 bg-gray-200 rounded-lg shadow-lg transform -rotate-3" style={{ zIndex: 1, marginTop: '16px', marginLeft: '16px' }}></div>
          <div className="w-96 h-96 bg-gray-50 rounded-lg p-6 flex flex-col justify-center text-center shadow-xl relative z-20" onClick={handleCardClick}>
            <h3 className="text-xl font-bold text-gray-900">{dateIdeas[dateIdea].date}</h3> 
            <p className="mt-4 text-md text-gray-600">
              {showDetails ? renderDescription(dateIdeas[dateIdea].description, dateIdeas[dateIdea].price) : "Click to see more details"}
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center"> 
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setDateIdea((dateIdea + 1) % dateIdeas.length)}
          >
            Next idea
          </button>
        </div>
      </div>
    </div>
  );
}
