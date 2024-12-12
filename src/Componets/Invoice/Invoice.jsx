import React from "react";
import { jsPDF } from "jspdf";

const Invoice = () => {
  const billData = [
    {
      id: 1,
      description: "Item 01",
      hours: 10,
      price: 1000,
      gst: 12,
      amount: 11200,
    },
    {
      id: 2,
      description: "Item 02",
      hours: 10,
      price: 1000,
      gst: 12,
      amount: 11200,
    },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;

    // Add Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Invoice", pageWidth / 2, margin, { align: "center" });

    // Company Info Section
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Company Name: ABC Ltd.", margin, margin + 20);
    doc.text("Address: 123 Main St.", margin, margin + 30);
    doc.text("Phone No.: +1 234 567 890", margin, margin + 40);
    doc.text("Email ID: example@company.com", margin, margin + 50);

    // Add a line to separate sections
    doc.setLineWidth(0.5);
    doc.line(margin, margin + 55, pageWidth - margin, margin + 55);

    // Bill To Section
    doc.text("Bill To:", margin, margin + 70);
    doc.text("Name: Customer Name", margin, margin + 80);
    doc.text("Address: Customer Address", margin, margin + 90);
    doc.text("Phone No.: Customer Phone", margin, margin + 100);
    doc.text("Email ID: customer@example.com", margin, margin + 110);

    // Add a line to separate Bill To section
    doc.line(margin, margin + 115, pageWidth - margin, margin + 115);

    // Rent Charges Table Header
    const tableStartY = margin + 130;
    doc.setFontSize(12);
    doc.text("Sl. No.", margin, tableStartY);
    doc.text("Description", margin + 30, tableStartY);
    doc.text("Hours", margin + 70, tableStartY);
    doc.text("Price / Hrs", margin + 100, tableStartY);
    {
      /* Adjusted X-coordinate */
    }
    doc.text("Amount", margin + 130, tableStartY);

    // Table Rows
    billData.forEach((bill, index) => {
      const yPosition = tableStartY + (index + 1) * 10;
      doc.text(String(index + 1), margin, yPosition);
      doc.text(bill.description, margin + 30, yPosition);
      doc.text(String(bill.hours), margin + 70, yPosition);
      doc.text(String(bill.price), margin + 100, yPosition);
      {
        /* Adjusted X-coordinate */
      }
      doc.text(String(bill.amount), margin + 130, yPosition);
    });

    // Final total (Optional, add if required)
    const totalAmount = billData.reduce(
      (total, bill) => total + bill.amount,
      0
    );
    doc.setFont("helvetica", "bold");
    doc.text(
      `Total: ${totalAmount}`,
      margin,
      tableStartY + (billData.length + 1) * 10
    );

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border-2 border-gray-800 rounded-lg bg-white">
      <h3 className="flex justify-center">Invoice</h3>

      <div className="bg-yellow-400 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">Rent Invoice</div>
          <div className="text-xl font-bold">LOGO</div>
        </div>
        <div className="mt-4">
          <div className="flex space-x-8 font-semibold">
            <div>
              <p>Company Name:</p>
              <p>Address:</p>
              <p>Phone No.:</p>
              <p>Email ID:</p>
            </div>
            <div>
              <p>Date:</p>
              <p>Time:</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <div className="flex space-x-8 text-white">
          <div>
            <p>Bill To:</p>
            <p>Name:</p>
            <p>Address:</p>
            <p>Phone No.:</p>
            <p>Email ID:</p>
          </div>
          <div>
            <p>Date:</p>
            <p>Time:</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Sl. No.</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Hours</th>
              <th className="px-4 py-2">Price / Hrs</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-yellow-400 font-semibold">
            {billData.map((bill, index) => (
              <tr key={bill.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{bill.description}</td>
                <td className="px-4 py-2">{bill.hours}</td>
                <td className="px-4 py-2">{bill.price}</td>
                <td className="px-4 py-2">{bill.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to generate PDF */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={generatePDF}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all "
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
