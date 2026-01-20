import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";

function Resources() {
  return (
    <div className="page">
      <h2>Resource Sharing</h2>
      <ResourceForm />
      <ResourceList />
    </div>
  );
}

export default Resources;
