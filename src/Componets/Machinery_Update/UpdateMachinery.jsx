import React, { useState } from 'react';

const MachineryUpdate = () => {
  const [machineryName, setMachineryName] = useState('');
  const [rentType, setRentType] = useState('');
  const [machineryImg, setMachineryImg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Machinery Updated:\nName: ${machineryName}\nRent Type: ${rentType}\nImage: ${machineryImg}`);
    // You can add your API call logic here
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-lg mx-auto bg-dark-gray shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-4">Update Machinery Details</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Machinery Name</label>
            <input
              type="text"
              value={machineryName}
              onChange={(e) => setMachineryName(e.target.value)}
              placeholder="Enter machinery name"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Rent Type</label>
            <select
              value={rentType}
              onChange={(e) => setRentType(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="" disabled>Select rent type</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Machinery Image URL</label>
            <input
              type="url"
              value={machineryImg}
              onChange={(e) => setMachineryImg(e.target.value)}
              placeholder="Enter image URL"
              className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-dark-gray font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Update Machinery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MachineryUpdate;
