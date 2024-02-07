import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function FiltersModal({ onUpdate, onClose }) {
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const updateFilters = () => {
	console.log('selectedPrice', selectedPrice)
	// type of selectedPrice 
	console.log('typeof selectedPrice', typeof selectedPrice)
    onUpdate(Number(selectedPrice)); // Call the onUpdate function passed from parent with the selected price
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Adjust Filters
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Use the slider to adjust the price range.
                        </p>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range</label>
                        <input
                          type="range"
                          id="price"
                          name="price"
                          min="0"
                          max="5"
                          value={selectedPrice}
                          onChange={handlePriceChange}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Free</span>
                          <span>$$$$$</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<button
						type="button"
						className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary sm:ml-3 sm:w-auto"
						onClick={() => {
						updateFilters(); // First, apply the filters
						onClose(); // Then close the modal
						}}
					>
						Update
					</button>
					<button
						type="button"
						className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-primary hover:bg-bright sm:mt-0 sm:w-auto"
						onClick={onClose} // Use onClose directly here for the cancel action
					>
						Cancel
					</button>
				</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
