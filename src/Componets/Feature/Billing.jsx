import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Billing = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    rentPaid: '',
    operatorName: '',
    mobileNumber: '',
    customerAddress: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set the title
    doc.setFontSize(18);
    doc.text('Bill Receipt', 14, 20);

    // Add Customer Details to the PDF
    doc.setFontSize(12);
    doc.text(`Customer Name: ${formData.customerName}`, 14, 30);
    doc.text(`Operator Name: ${formData.operatorName}`, 14, 40);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 14, 50);
    doc.text(`Customer Address: ${formData.customerAddress}`, 14, 60);
    doc.text(`Rent Paid: ₹${formData.rentPaid}`, 14, 70);

    // Save the PDF
    doc.save('bill-receipt.pdf');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Billing</h2>

      {/* Form to capture data */}
      <div className="mb-4">
        <input
          type="text"
          id="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          id="rentPaid"
          placeholder="Rent Paid"
          value={formData.rentPaid}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          id="operatorName"
          placeholder="Operator Name"
          value={formData.operatorName}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="tel"
          id="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          id="customerAddress"
          placeholder="Customer Address"
          value={formData.customerAddress}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
      </div>

      {/* Button to generate PDF */}
      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Download Bill
      </button>
    </div>
  );
};

export default Billing;
