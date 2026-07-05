import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier application for tracking workouts, teams, and progress.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary" href="https://vite.dev/" target="_blank" rel="noreferrer">
                  Vite Docs
                </a>
                <a className="btn btn-outline-secondary" href="https://react.dev/" target="_blank" rel="noreferrer">
                  React Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
