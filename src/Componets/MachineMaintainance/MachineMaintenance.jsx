import React, { useState } from "react";

const MachineCard = ({ machine, onAddIncome, onAddExpense }) => {
  // Calculate profit/loss color
  const isProfit = machine.profitOrLoss >= 0;

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Machine Image */}
      <img
        src={machine.image}
        alt={machine.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Machine Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{machine.name}</h2>
        <p
          className={`text-lg font-medium ${
            isProfit ? "text-green-600" : "text-red-600"
          }`}
        >
          {isProfit ? "Profit" : "Loss"}: ₹{Math.abs(machine.profitOrLoss)}
        </p>
        <p className="text-sm text-gray-500">
          Status: {" "}
          <span
            className={`font-semibold ${
              machine.status === "Running"
                ? "text-green-500"
                : "text-orange-500"
            }`}
          >
            {machine.status}
          </span>
        </p>
        <p className="text-sm text-gray-500">
          Last Maintenance: {machine.lastMaintenance}
        </p>

        {/* Income and Expenses */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Income</h3>
          <table className="w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2 border border-gray-300">Source</th>
                <th className="p-2 border border-gray-300">Amount</th>
                <th className="p-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {machine.income.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300">{item.source}</td>
                  <td className="p-2 border border-gray-300">₹{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => onAddIncome(machine.id)}
            className="mt-2 p-2 bg-blue-500 text-white rounded-full"
          >
            + Add Income
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Expenses</h3>
          <table className="w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2 border border-gray-300">Expense</th>
                <th className="p-2 border border-gray-300">Amount</th>
                <th className="p-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {machine.expenses.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300">{item.type}</td>
                  <td className="p-2 border border-gray-300">₹{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => onAddExpense(machine.id)}
            className="mt-2 p-2 bg-red-500 text-white rounded-full"
          >
            + Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

const MachineMaintenanceApp = () => {
  // Example data
  const [machines, setMachines] = useState([
    {
      id: 1,
      name: "CNC Machine 101",
      image: "https://via.placeholder.com/400x300.png?text=CNC+Machine",
      profitOrLoss: 15000,
      status: "Running",
      lastMaintenance: "2024-11-01",
      income: [
        { source: "Product A", amount: 5000 },
        { source: "Product B", amount: 10000 },
      ],
      expenses: [
        { type: "Repair", amount: 2000 },
        { type: "Electricity", amount: 3000 },
      ],
    },
  ]);

  const addIncome = (id) => {
    const source = prompt("Enter income source:");
    const amount = parseFloat(prompt("Enter income amount:"));

    if (source && !isNaN(amount)) {
      setMachines((prev) =>
        prev.map((machine) =>
          machine.id === id
            ? {
                ...machine,
                income: [...machine.income, { source, amount }],
              }
            : machine
        )
      );
    }
  };

  const addExpense = (id) => {
    const type = prompt("Enter expense type:");
    const amount = parseFloat(prompt("Enter expense amount:"));

    if (type && !isNaN(amount)) {
      setMachines((prev) =>
        prev.map((machine) =>
          machine.id === id
            ? {
                ...machine,
                expenses: [...machine.expenses, { type, amount }],
              }
            : machine
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Machine Maintenance Dashboard
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {machines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            onAddIncome={addIncome}
            onAddExpense={addExpense}
          />
        ))}
      </div>
    </div>
  );
};

export default MachineMaintenanceApp;