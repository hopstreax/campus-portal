import { useState } from "react";

function ResourceForm({ onResourceAdded }) {
  const [resource, setResource] = useState({
    name: "",
    category: "",
    availability: "",
    contact: "",
  });

  const handleChange = (e) => {
    setResource({
      ...resource,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
      });

      if (!res.ok) {
        throw new Error("Failed to add resource");
      }

      setResource({
        name: "",
        category: "",
        availability: "",
        contact: "",
      });

      if (onResourceAdded) {
        onResourceAdded();
      }

      alert("Resource added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding resource");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-lg space-y-4"
    >
      <h3 className="text-xl font-semibold text-sky-400">
        Add a Resource
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Resource Name"
        value={resource.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sky-500"
      />

      <input
        type="text"
        name="category"
        placeholder="Category (Books / Notes / Lab Items)"
        value={resource.category}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sky-500"
      />

      <input
        type="text"
        name="availability"
        placeholder="Availability (Free / Borrow)"
        value={resource.availability}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sky-500"
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact Information"
        value={resource.contact}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-sky-500"
      />

      <button
        type="submit"
        className="w-full bg-sky-500 hover:bg-sky-600 text-black font-semibold py-2 rounded-lg transition"
      >
        Add Resource
      </button>
    </form>
  );
}

export default ResourceForm;
