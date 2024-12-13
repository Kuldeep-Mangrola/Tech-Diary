import React, { useState } from "react";

function MachineRegistration() {
  const [formData, setFormData] = useState({
    machineName: "",
    rentType: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setFormData({
      machineName: "",
      rentType: "",
      image: null,
    });

    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-5">
      <div className="bg-gray-800 w-11/12 md:w-2/3 lg:w-1/3 flex flex-col p-8 border border-yellow-500 rounded-2xl shadow-xl">
        <h1 className="text-yellow-400 text-3xl font-bold mb-6 text-center">
          Register Your Machine
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="MachineName"
              className="block text-white mb-2 font-bold text-[18px]"
            >
              Machine Name
            </label>
            <input
              type="text"
              id="MachineName"
              name="machineName"
              value={formData.machineName}
              onChange={handleChange}
              placeholder="Enter Machine Name"
              className="w-full bg-gray-700 text-white placeholder-gray-400 border border-yellow-400 rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rentType"
              className="block text-white mb-2 font-bold text-[18px]"
            >
              Rent Type
            </label>
            <select
              id="rentType"
              name="rentType"
              value={formData.rentType}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border border-yellow-400 rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-500"
              required
            >
              <option value="" disabled>
                Select Rent Type
              </option>
              <option value="By Acre">By Acre</option>
              <option value="By Hour">By Hour</option>
              <option value="By Quantity">By Quantity</option>
              <option value="By Days">By Days</option>
              <option value="By Contract">By Contract</option>
              <option value="By Kilometers">By Kilometers</option>
              <option value="By Foot">By Foot</option>
            </select>
          </div>

          <label
            htmlFor="machineImage"
            className="block text-white mt-4 font-bold text-[18px]"
          >
            Upload Machine Image
          </label>
          <div className="bg-gray-700 mt-6 flex items-center h-16 rounded-lg w-full">
            <input
              type="file"
              id="machineImage"
              accept="image/*"
              onChange={handleFileChange}
              className="ml-7"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MachineRegistration;
