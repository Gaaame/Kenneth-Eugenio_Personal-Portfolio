import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="bg-gray-200 h-48 rounded mb-4"></div>
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 text-sm mb-4">
            Short product description goes here.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">$29</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="bg-gray-200 h-48 rounded mb-4"></div>
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 text-sm mb-4">
            Short product description goes here.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">$49</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="bg-gray-200 h-48 rounded mb-4"></div>
          <h3 className="text-lg font-bold mb-2">Product Name</h3>
          <p className="text-gray-600 text-sm mb-4">
            Short product description goes here.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">$79</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
