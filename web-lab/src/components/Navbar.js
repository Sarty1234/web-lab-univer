import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbar() {
  return (
      <div>
        <nav className="navbar navbar-expand-md bg-body py-3">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#" style={{ marginRight: 0 }}>
              <span 
                className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon" 
                style={{ width: '120px', height: '60px', background: '#ffffff' }}
              >
                <img 
                  className="img-fluid" 
                  width="1200" 
                  height="630" 
                  style={{ width: '100%', height: '100%', borderRadius: '5px' }} 
                  src="/img/logo.jpg" 
                  alt="Logo"
                />
              </span>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3">
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <Router>
              <div className="collapse navbar-collapse" id="navcol-3">
                <ul className="navbar-nav gap-5 mx-auto">
                  <li className="nav-item"><Link to="/" style={{ textDecoration: 'none' }}><a className="nav-link active" style={{ fontSize: '18px' }}>Головна</a></Link></li>
                  <li className="nav-item"><Link to="/catalog" style={{ textDecoration: 'none' }}><a className="nav-link" style={{ fontSize: '18px' }}>Каталог</a></Link></li>
                  <li className="nav-item"><Link to="/card" style={{ textDecoration: 'none' }}><a className="nav-link" style={{ fontSize: '18px' }}>Бронювання</a></Link></li>
                </ul>
              </div>
            </Router>
          </div>
        </nav>
        <hr style={{ color: 'rgb(0,0,0)', borderWidth: '2px' }} />
      </div>
  );
}