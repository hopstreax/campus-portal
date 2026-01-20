function About() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">About This Project</h2>
        <p className="text-muted">
          Campus Resource Sharing & Lost–Found Portal
        </p>
      </div>

      {/* Project Description */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">📌 Project Overview</h5>
              <p className="card-text mt-3">
                This project is a campus-focused web application designed to
                help students share unused resources and manage lost & found
                items efficiently. The goal is to promote collaboration,
                reduce waste, and provide a simple platform for students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">🛠 Technology Stack</h5>

              <div className="row mt-3">
                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-primary p-2 w-100 text-center">
                    React (Frontend)
                  </span>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-success p-2 w-100 text-center">
                    Express.js
                  </span>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-warning text-dark p-2 w-100 text-center">
                    MySQL Database
                  </span>
                </div>

                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-info text-dark p-2 w-100 text-center">
                    Bootstrap UI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">✨ Key Features</h5>

              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  Share academic resources like books, notes, and lab materials
                </li>
                <li className="list-group-item">
                  Report lost and found items within the campus
                </li>
                <li className="list-group-item">
                  Persistent data storage using MySQL
                </li>
                <li className="list-group-item">
                  Clean and responsive UI using Bootstrap
                </li>
                <li className="list-group-item">
                  REST API-based communication between frontend and backend
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-4 text-muted">
        <small>
          Developed as an academic project to demonstrate full-stack web
          development concepts.
        </small>
      </div>
    </div>
  );
}

export default About;
