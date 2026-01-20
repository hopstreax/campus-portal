import { useEffect, useState } from "react";

function LostItemList({ refresh }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lostfound")
      .then((res) => res.json())
      .then(setItems);
  }, [refresh]);

  if (items.length === 0) {
    return (
      <div className="alert alert-secondary">
        No lost or found items reported yet.
      </div>
    );
  }

  return (
    <div className="row">
      {items.map((item) => {
        const isFound =
          item.status && item.status.toLowerCase() === "found";

        return (
          <div className="col-md-6 mb-4" key={item.id}>
            <div
              className={`card shadow-sm h-100 border-${
                isFound ? "success" : "danger"
              }`}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  {item.item_name}
                </h5>

                <p className="card-text">
                  <strong>Location:</strong> {item.location}
                </p>

                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`badge bg-${
                      isFound ? "success" : "danger"
                    }`}
                  >
                    {isFound ? "Found" : "Lost"}
                  </span>
                </p>

                <p className="card-text">
                  <strong>Contact:</strong> {item.contact}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LostItemList;
