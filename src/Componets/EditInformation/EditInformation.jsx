import React, { useState } from "react";

const EditInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    machineryName: "",
    machineryImage: "",
    email: "",
    password: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving data or calling an API
    alert("Information saved successfully!");
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Machinery Name */}
        <div>
          <label className="block text-gray-700 font-medium">Machinery Name</label>
          <input
            type="text"
            name="machineryName"
            value={formData.machineryName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter machinery name"
          />
        </div>

        {/* Machinery Image */}
        <div>
          <label className="block text-gray-700 font-medium">Machinery Image URL</label>
          <input
            type="text"
            name="machineryImage"
            value={formData.machineryImage}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter machinery image URL"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter a new password"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-gray-700 font-medium">Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter any additional information"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInformation;
