import React, { useState } from "react";

function MachineRegistration() {
  const [formData, setFormData] = useState({
    machineName: "",
    rentType: "",
    image: null,
    imagePreview: null, // State for image preview
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
    const imagePreview = URL.createObjectURL(file); // Create image preview URL
    setFormData((prevData) => ({
      ...prevData,
      image: file,
      imagePreview: imagePreview, // Save preview URL in state
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
      imagePreview: null, // Reset image preview after submission
    });

    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-4 bg-gray-900 p-5">
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

          <div className="mt-4">
            <label
              htmlFor="machineImage"
              className="block text-white font-bold text-[18px]"
            >
              Upload Machine Image
            </label>
            <div className="bg-gray-700 mt-2 flex items-center justify-between h-16 rounded-lg w-full p-3">
              <input
                type="file"
                id="machineImage"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="machineImage"
                className="text-white cursor-pointer w-full"
              >
                {formData.image ? formData.image.name : "Choose a file"}
              </label>
            </div>
            
            {/* Image Preview */}
            {formData.imagePreview && (
              <div className="mt-4">
                <h3 className="text-white font-bold mb-2">Image Preview</h3>
                <img
                  src={formData.imagePreview}
                  alt="Image Preview"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
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
