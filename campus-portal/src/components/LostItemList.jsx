import { useEffect, useState } from "react";

function LostItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lostItems")) || [];
    setItems(data);
  }, []);

  return (
    <div>
      <h3>Reported Items</h3>
      {items.map((item, index) => (
        <div
          className="card"
          key={index}
          style={{ borderColor: item.status === "Found" ? "green" : "red" }}
        >
          <h4>{item.itemName}</h4>
          <p>Location: {item.location}</p>
          <p>Status: {item.status}</p>
          <p>Contact: {item.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default LostItemList;
