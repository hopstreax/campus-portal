import { useState } from "react";

function LostItemForm() {
  const [item, setItem] = useState({
    itemName: "",
    location: "",
    status: "",
    contact: "",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("lostItems")) || [];
    existing.push(item);
    localStorage.setItem("lostItems", JSON.stringify(existing));

    alert("Item Reported!");
    setItem({ itemName: "", location: "", status: "", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="itemName" placeholder="Item Name" value={item.itemName} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={item.location} onChange={handleChange} required />
      <input name="status" placeholder="Lost / Found" value={item.status} onChange={handleChange} required />
      <input name="contact" placeholder="Contact Info" value={item.contact} onChange={handleChange} required />
      <button>Report Item</button>
    </form>
  );
}

export default LostItemForm;
