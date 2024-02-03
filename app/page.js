"use client"

import React, { useState, useEffect } from 'react'

const dateIdeas = [
  {
    date: "Go to the beach",
    description: "This is a great idea for a date. You can go to the beach and have a great time together."
  },
  {
    date: "Go to the movies",
    description: "This is a great idea for a date. You can go to the movies and have a great time together."
  },
  {
    date: "Go to a restaurant",
    description: "This is a great idea for a date. You can go to a restaurant and have a great time together."
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

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: '640px' }}>
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Find the perfect date</h2>
          <p className="mt-2 text-sm text-gray-600">
            Go through the cards to find the perfect date for you.
          </p>
        </div>
        {/* Stacked Cards Effect */}
        <div className="mt-10 relative flex justify-center">
          {/* Bottom Card (Twisted) */}
          <div className="absolute w-64 h-64 bg-gray-200 rounded-lg shadow-lg transform -rotate-3" style={{ zIndex: 1, marginTop: '12px', marginLeft: '12px' }}></div>
          {/* Top Card */}
          <div className="w-64 h-64 bg-gray-50 rounded-lg p-4 flex flex-col justify-center text-center shadow-xl relative z-20" onClick={handleCardClick}>
            <h3 className="text-lg font-bold text-gray-900">{dateIdeas[dateIdea].date}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {showDetails ? dateIdeas[dateIdea].description : "Click to see more details"}
            </p>

          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setDateIdea((dateIdea + 1) % dateIdeas.length)}
          >
            Next idea
          </button>
        </div>
      </div>
    </div>
  );
}
