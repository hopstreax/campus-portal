import { useEffect, useState } from "react";

function ResourceList({ refresh }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResources = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/resources");
      const data = await res.json();
      setResources(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, [refresh]);

  if (loading) {
    return <p className="text-gray-400 mt-6">Loading resources...</p>;
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-6">
        Available Resources
      </h3>

      {resources.length === 0 ? (
        <p className="text-gray-400">
          No resources available yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5"
            >
              <h4 className="text-lg font-semibold text-sky-400 mb-2">
                {res.name}
              </h4>
              <p className="text-gray-300">
                <span className="font-medium">Category:</span>{" "}
                {res.category}
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Availability:</span>{" "}
                {res.availability}
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Contact:</span>{" "}
                {res.contact}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResourceList;
