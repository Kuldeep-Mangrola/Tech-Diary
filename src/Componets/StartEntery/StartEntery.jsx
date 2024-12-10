import React from "react";
import { assets } from "../../assets/image/assest";

const StartEntry = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-4">
    
      <h1 className="text-3xl font-bold text-gray-300 mb-8">Start Entery</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
      
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Rental Details
          </h2>
          <form className="space-y-4">
      
            <div>
              <label htmlFor="CustomerName" className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                id="CustomerName"
                placeholder="Enter customer's name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            
            <div>
              <label htmlFor="RentPaid" className="block text-sm font-medium text-gray-700">
                Rent Paid
              </label>
              <input
                type="number"
                id="RentPaid"
                placeholder="Enter amount paid"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            
            <div>
              <label htmlFor="OperatorName" className="block text-sm font-medium text-gray-700">
                Operator Name
              </label>
              <input
                type="text"
                id="OperatorName"
                placeholder="Enter operator's name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

          
            <div>
              <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="Number"
                placeholder="Enter mobile number"
                maxLength={10}
                pattern="\d{10}"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
                Customer Address
              </label>
              <input
                type="text"
                id="Address"
                placeholder="Client Address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>


        
         

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 font-bold py-2 rounded-md shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Submit Entry
              </button>
            </div>
          </form>
        </div>

    
        <div className="space-y-6">
          
          <div className="bg-yellow-400 text-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Rental Summary</h2>
            <p className="text-sm">Total Rentals: <span className="font-semibold">12</span></p>
            <p className="text-sm">Total Rent Collected: <span className="font-semibold">₹30,000</span></p>
            <p className="text-sm">Most Frequent Customer: <span className="font-semibold">Aman Rathod</span></p>
          </div>

          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Recent Entries</h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span>Aman Rathod</span>
                <span className="text-sm text-gray-600">₹2,500</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Himanshu Vishwakarma</span>
                <span className="text-sm text-gray-600">₹5,000</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Kuldeep Mangrola</span>
                <span className="text-sm text-gray-600">₹3,200</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartEntry;
