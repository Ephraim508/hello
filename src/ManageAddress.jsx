import React, { useState } from "react";

const ManageAddress = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <div className="border p-4 rounded-lg mb-4">
        <h3 className="text-red-500 font-semibold mb-2">ADD A NEW ADDRESS</h3>
        <button className="px-4 py-2 bg-red-500 text-white rounded mb-4 whitespace-nowrap">
  Use my current location
</button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="mobile"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address (Area and Street)"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City/District/Town"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">--Select State--</option>
              <option value="Telangana">Telangana</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="landmark"
              placeholder="Landmark (Optional)"
              value={formData.landmark}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="alternatePhone"
              placeholder="Alternate Phone (Optional)"
              value={formData.alternatePhone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={formData.addressType === "Home"}
                onChange={handleChange}
                className="mr-2"
              />
              Home
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={formData.addressType === "Work"}
                onChange={handleChange}
                className="mr-2"
              />
              Work
            </label>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded">
              SAVE
            </button>
            <button type="button" className="text-red-500 py-2 px-6 rounded border border-red-500">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAddress;
