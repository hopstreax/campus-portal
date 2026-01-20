function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">
            Campus Resource Sharing & Lost–Found Portal
          </h1>
          <p className="lead mb-4">
            An initiative for students of ITER, SOA University to share resources
            and manage lost & found items efficiently.
          </p>

          <div>
            <a href="/resources" className="btn btn-light btn-lg me-3">
              Share Resources
            </a>
            <a href="/lostfound" className="btn btn-outline-light btn-lg">
              Report Lost Item
            </a>
          </div>
        </div>
      </div>

      {/* COLLEGE INTRO */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold">About ITER, SOA University</h2>
            <p className="text-muted mt-3">
              Institute of Technical Education and Research (ITER) is a
              constituent institute of Siksha ‘O’ Anusandhan (SOA) Deemed to be
              University, located in Bhubaneswar, Odisha. ITER is known for its
              strong academic foundation, innovation, and vibrant campus life.
            </p>
            <p className="text-muted">
              This portal is designed specifically for ITER students to promote
              collaboration, sustainability, and community engagement inside
              the campus.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="card shadow-sm text-center h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">🎓 ITER</h5>
                    <p className="text-muted mb-0">
                      Engineering & Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="card shadow-sm text-center h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">🏫 SOA University</h5>
                    <p className="text-muted mb-0">
                      Deemed to be University
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card shadow-sm text-center h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">📍 Bhubaneswar</h5>
                    <p className="text-muted mb-0">
                      Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card shadow-sm text-center h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">🤝 Student Community</h5>
                    <p className="text-muted mb-0">
                      Collaboration & Sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Portal Features</h2>
          <p className="text-muted">
            Designed to solve real campus problems
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">📚 Resource Sharing</h5>
                <p className="text-muted mt-2">
                  Share books, notes, and lab materials with fellow ITER students.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">🔍 Lost & Found</h5>
                <p className="text-muted mt-2">
                  Report lost items or help others by reporting found items.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">💾 MySQL Database</h5>
                <p className="text-muted mt-2">
                  Secure and persistent data storage using MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY THIS PORTAL */}
      <div className="container mt-5 mb-5">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h3 className="fw-bold mb-3">Why This Portal?</h3>
            <p className="text-muted">
              ITER has a large and diverse student population. This portal helps
              students save money, reduce waste, and quickly recover lost items
              while fostering a sense of community and responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;