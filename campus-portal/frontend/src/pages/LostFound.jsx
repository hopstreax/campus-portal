import { useState } from "react";
import LostItemForm from "../components/LostItemForm";
import LostItemList from "../components/LostItemList";

function LostFound() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Lost & Found</h2>
        <p className="text-muted">
          Report lost items or help others by reporting found items
        </p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <LostItemForm onAdded={() => setRefresh(!refresh)} />
        </div>

        <div className="col-md-8">
          <LostItemList refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default LostFound;
