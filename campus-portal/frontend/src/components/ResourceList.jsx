import { useEffect, useState } from "react";

function ResourceList({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/resources")
      .then(res => res.json())
      .then(setData);
  }, [refresh]);

  return (
    <div className="row">
      {data.map(r => (
        <div className="col-md-4 mb-4" key={r.id}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{r.name}</h5>
              <p className="card-text">Category: {r.category}</p>
              <p className="card-text">Availability: {r.availability}</p>
              <p className="card-text">Contact: {r.contact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
