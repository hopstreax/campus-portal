import { useState } from "react";
import Layout from "../components/Layout";
import ResourceForm from "../components/ResourceForm";
import ResourceList from "../components/ResourceList";

function Resources() {
  const [refresh, setRefresh] = useState(false);

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Resource Sharing</h2>

      <ResourceForm onResourceAdded={() => setRefresh(!refresh)} />
      <ResourceList refresh={refresh} />
    </Layout>
  );
}

export default Resources;
