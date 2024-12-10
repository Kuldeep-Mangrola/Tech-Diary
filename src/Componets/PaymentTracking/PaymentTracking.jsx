import React, { useState, useEffect } from "react";

const PaymentTracking = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchData = [
      {
        id: 1,
        machinery: "Excavator",
        customer: "John Doe",
        contact: "123-456-7890",
        pendingAmount: 500,
        totalAmount: 1500,
      },
      {
        id: 2,
        machinery: "Bulldozer",
        customer: "Jane Smith",
        contact: "987-654-3210",
        pendingAmount: 300,
        totalAmount: 1200,
      },
    ];
    setPaymentData(fetchData);
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center py-8 px-4">
      <h2 className="bg-yellow-400 text-gray-800 text-xl font-bold text-center py-2 px-4 rounded-lg mb-6 uppercase">
        Payment Tracking
      </h2>

      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead className="bg-yellow-400 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left font-bold">#</th>
              <th className="py-3 px-4 text-left font-bold">Machinery</th>
              <th className="py-3 px-4 text-left font-bold">Customer Name</th>
              <th className="py-3 px-4 text-left font-bold">Contact</th>
              <th className="py-3 px-4 text-left font-bold">Pending Amount</th>
              <th className="py-3 px-4 text-left font-bold">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.length > 0 ? (
              paymentData.map((data, index) => (
                <tr
                  key={data.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 text-sm">{index + 1}</td>
                  <td className="py-3 px-4 text-sm">{data.machinery}</td>
                  <td className="py-3 px-4 text-sm">{data.customer}</td>
                  <td className="py-3 px-4 text-sm">{data.contact}</td>
                  <td className="py-3 px-4 text-sm text-red-500">
                    ${data.pendingAmount}
                  </td>
                  <td className="py-3 px-4 text-sm">${data.totalAmount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 px-4 text-center text-sm text-gray-600"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentTracking;
