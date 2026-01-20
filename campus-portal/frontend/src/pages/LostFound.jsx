import LostItemForm from "../components/LostItemForm";
import LostItemList from "../components/LostItemList";

function LostFound() {
  return (
    <div className="page">
      <h2>Lost & Found</h2>
      <LostItemForm />
      <LostItemList />
    </div>
  );
}

export default LostFound;
