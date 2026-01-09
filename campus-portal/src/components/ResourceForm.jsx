import { useState } from "react";

function ResourceForm() {
  const [resource, setResource] = useState({
    name: "",
    category: "",
    availability: "",
    contact: "",
  });

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("resources")) || [];
    existing.push(resource);
    localStorage.setItem("resources", JSON.stringify(existing));

    alert("Resource Added Successfully!");
    setResource({ name: "", category: "", availability: "", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Resource Name" value={resource.name} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={resource.category} onChange={handleChange} required />
      <input name="availability" placeholder="Free / Borrow" value={resource.availability} onChange={handleChange} required />
      <input name="contact" placeholder="Contact Info" value={resource.contact} onChange={handleChange} required />
      <button>Add Resource</button>
    </form>
  );
}

export default ResourceForm;
