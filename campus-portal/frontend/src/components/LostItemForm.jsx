import { useState } from "react";

function LostItemForm({ onAdded }) {
  const [form, setForm] = useState({
    item_name: "",
    location: "",
    status: "",
    contact: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/lostfound", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      item_name: "",
      location: "",
      status: "",
      contact: "",
    });

    onAdded();
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Report Item</h5>

        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            placeholder="Item Name"
            value={form.item_name}
            onChange={(e) =>
              setForm({ ...form, item_name: e.target.value })
            }
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Location (Library, Canteen, etc.)"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            required
          />

          <select
            className="form-select mb-3"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            required
          >
            <option value="">Select Status</option>
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <input
            className="form-control mb-3"
            placeholder="Contact Information"
            value={form.contact}
            onChange={(e) =>
              setForm({ ...form, contact: e.target.value })
            }
            required
          />

          <button className="btn btn-primary w-100">
            Report Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default LostItemForm;
