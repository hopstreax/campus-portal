import { useEffect, useState } from "react";

function ResourceList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("resources")) || [];
    setResources(data);
  }, []);

  return (
    <div>
      <h3>Available Resources</h3>
      {resources.map((res, index) => (
        <div className="card" key={index}>
          <h4>{res.name}</h4>
          <p>Category: {res.category}</p>
          <p>Availability: {res.availability}</p>
          <p>Contact: {res.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
