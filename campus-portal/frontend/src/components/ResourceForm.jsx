import { useState } from "react";

function ResourceForm({ onAdded }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    availability: "",
    contact: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", category: "", availability: "", contact: "" });
    onAdded();
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Add Resource</h5>

        <form onSubmit={submit}>
          <input className="form-control mb-3" placeholder="Resource Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} />

          <input className="form-control mb-3" placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })} />

          <input className="form-control mb-3" placeholder="Free / Borrow"
            value={form.availability}
            onChange={e => setForm({ ...form, availability: e.target.value })} />

          <input className="form-control mb-3" placeholder="Contact"
            value={form.contact}
            onChange={e => setForm({ ...form, contact: e.target.value })} />

          <button className="btn btn-primary w-100">Add Resource</button>
        </form>
      </div>
    </div>
  );
}

export default ResourceForm;
