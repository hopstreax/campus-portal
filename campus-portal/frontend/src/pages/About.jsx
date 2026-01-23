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

      {/* Project Overview */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">📌 Project Overview</h5>
              <p className="card-text mt-3">
                The Campus Resource Sharing & Lost–Found Portal is a full-stack
                web application developed for students of ITER, SOA University.
                The platform enables students to share unused academic resources
                such as books and notes, and also report lost or found items
                within the campus. The system promotes collaboration,
                sustainability, and efficient resource utilization.
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
                    Node.js
                  </span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-warning text-dark p-2 w-100 text-center">
                    Express.js
                  </span>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <span className="badge bg-info text-dark p-2 w-100 text-center">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                👥 Project Team
              </h5>

              <div className="row text-center">
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="fw-bold">Himanshu Patro</h6>
                      <p className="text-muted mb-1">
                        Frontend & Backend Developer
                      </p>
                      <small className="text-muted">
                        Reg. No: 2241016311
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="fw-bold">Prakash Behuria</h6>
                      <p className="text-muted mb-1">
                        Backend & Database Developer
                      </p>
                      <small className="text-muted">
                        Reg. No: 2241002127
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="fw-bold">Kumar Gopal Ballav Ray</h6>
                      <p className="text-muted mb-1">
                        Frontend & UI Designer
                      </p>
                      <small className="text-muted">
                        Reg. No: 2241018110
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h6 className="fw-bold">Laren Kumar Sethy</h6>
                      <p className="text-muted mb-1">
                        Database & API Developer
                      </p>
                      <small className="text-muted">
                        Reg. No: 2241019380
                      </small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4 text-muted">
        <small>
          Developed as an academic project at ITER, SOA University,
          Bhubaneswar.
        </small>
      </div>
    </div>
  );
}

export default About;
