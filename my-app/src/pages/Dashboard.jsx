import React from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <span role="img" aria-label="logo">📊</span> CivicTrack
        </div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Reports & Analytics</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, manage civic issues efficiently</p>
          </div>
          <div className="search-profile">
            <input type="text" placeholder="Search issues..." />
            <div className="profile">
              <span className="notif">🔔<span className="notif-count">3</span></span>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" />
              <div>
                <strong>John Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>
        <section className="stats">
          <div className="stat new">
            <div className="stat-title">New Issues</div>
            <div className="stat-value">24</div>
            <div className="stat-desc">+12% from last week</div>
            <span className="stat-icon">⚠️</span>
          </div>
          <div className="stat pending">
            <div className="stat-title">Pending Issues</div>
            <div className="stat-value">18</div>
            <div className="stat-desc">-5% from last week</div>
            <span className="stat-icon">🕒</span>
          </div>
          <div className="stat completed">
            <div className="stat-title">Completed Issues</div>
            <div className="stat-value">156</div>
            <div className="stat-desc">+23% from last week</div>
            <span className="stat-icon">✅</span>
          </div>
          <div className="stat reverted">
            <div className="stat-title">Reverted Issues</div>
            <div className="stat-value">7</div>
            <div className="stat-desc">+2 from last week</div>
            <span className="stat-icon">↩️</span>
          </div>
        </section>
        <section className="dashboard-body">
          <div className="recent-issues">
            <h2>Recent Issues</h2>
            <ul>
              <li>
                <div>
                  <strong>Pothole on Main Street</strong>
                  <span>Downtown District</span>
                  <span className="reported">Reported 2 hours ago</span>
                </div>
                <div>
                  <span className="badge new">New</span>
                  <span className="due">Due: 2 days</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Broken Street Light</strong>
                  <span>North Park Avenue</span>
                  <span className="reported">Reported 5 hours ago</span>
                </div>
                <div>
                  <span className="badge progress">In Progress</span>
                  <span className="due">Due: 1 day</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Graffiti Removal</strong>
                  <span>City Center</span>
                  <span className="reported">Reported 1 day ago</span>
                </div>
                <div>
                  <span className="badge completed">Completed</span>
                  <span className="due">Finished</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="issues-map">
            <h2>Issues Map</h2>
            <div className="map-placeholder">
              {/* Replace with actual map component */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/New_York_City_Map.png" alt="Map" />
              <div className="map-dots">
                <span className="dot orange" style={{top: "40%", left: "60%"}}></span>
                <span className="dot blue" style={{top: "50%", left: "70%"}}></span>
                <span className="dot green" style={{top: "60%", left: "80%"}}></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

