import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Campus Resource Sharing <span>&</span> Lost–Found Portal
        </h1>
        <p>
          A campus-focused solution that encourages sharing, reduces waste,
          and helps students quickly find lost items.
        </p>

        <div className="hero-buttons">
          <Link to="/resources" className="btn primary">
            Share Resources
          </Link>
          <Link to="/lostfound" className="btn secondary">
            Report Lost Item
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>📚 Resource Sharing</h3>
          <p>
            Share books, notes, and lab items with fellow students easily.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔍 Lost & Found</h3>
          <p>
            Report lost items or help others by reporting found items.
          </p>
        </div>

        <div className="feature-card">
          <h3>🌱 Eco-Friendly</h3>
          <p>
            Encourages reuse and reduces unnecessary waste on campus.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
