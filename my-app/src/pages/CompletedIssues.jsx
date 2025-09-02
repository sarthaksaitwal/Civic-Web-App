import React from "react";
import "../styles/CompletedIssues.css";
import { FaBars, FaEye, FaBell } from "react-icons/fa";

const issues = [
  {
    title: "Pothole Repair on Oak Street",
    location: "Oak Street & 3rd Avenue",
    category: "Road",
    categoryColor: "road",
    zone: "North",
    deadline: "Dec 20, 2024",
    priority: "High Priority",
    status: "Completed",
    completedDate: "Dec 18, 2024",
    completedEarly: "2 days early",
  },
  {
    title: "Street Light Replacement",
    location: "Maple Avenue",
    category: "Electricity",
    categoryColor: "electricity",
    zone: "East",
    deadline: "Dec 15, 2024",
    priority: "Medium Priority",
    status: "Completed",
    completedDate: "Dec 14, 2024",
    completedEarly: "1 day early",
  },
  {
    title: "Water Main Repair",
    location: "Pine Street & 7th Ave",
    category: "Water",
    categoryColor: "water",
    zone: "South",
    deadline: "Dec 12, 2024",
    priority: "High Priority",
    status: "Completed",
    completedDate: "Dec 11, 2024",
    completedEarly: "1 day early",
  },
  {
    title: "Waste Bin Installation",
    location: "Central Park Area",
    category: "Waste",
    categoryColor: "waste",
    zone: "West",
    deadline: "Dec 10, 2024",
    priority: "Low Priority",
    status: "Completed",
    completedDate: "Dec 9, 2024",
    completedEarly: "1 day early",
  },
];

const categories = [
  "All",
  "Road",
  "Electricity",
  "Water",
  "Waste",
  "Other"
];

const zones = [
  "All Zones",
  "North",
  "East",
  "West",
  "South"
];

export default function CompletedIssues({ onDashboardClick }) {
  return (
    <div className="ci-root">
      {/* Sidebar */}
      {/* <aside className="ci-sidebar">
        <div className="ci-logo">
          <img src="https://img.icons8.com/ios-filled/40/4a90e2/city-buildings.png" alt="CivicTrack" />
          <span>CivicTrack</span>
          <FaBars className="ci-menu" />
        </div>
        <nav className="ci-nav">
          <a
            href="#"
            className="ci-nav-item"
            onClick={e => { e.preventDefault(); onDashboardClick(); }}
          >
            Dashboard
          </a>
          <a href="#" className="ci-nav-item">Profile</a>
          <a href="#" className="ci-nav-item">Settings</a>
          <a href="#" className="ci-nav-item">Reports & Analytics</a>
        </nav>
      </aside> */}
      {/* Main Content */}
      <main className="ci-main">
        {/* Header */}
        <header className="ci-header">
          <div>
            <h1 className="ci-title">Completed Issues</h1>
            <p className="ci-desc">Review and track all successfully resolved civic issues</p>
          </div>
          <div className="ci-user">
            <FaBell className="ci-bell" />
            <span className="ci-badge">3</span>
            <img className="ci-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" />
            <div className="ci-user-info">
              <span className="ci-user-name">John Admin</span>
              <span className="ci-user-role">Administrator</span>
            </div>
          </div>
        </header>
        {/* Filters */}
        <section className="ci-filters">
          <div className="ci-filter-group">
            <label>Deadline:</label>
            <select>
              <option>All</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="ci-filter-group">
            <label>Category:</label>
            <select>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="ci-filter-group">
            <label>Zone:</label>
            <select>
              {zones.map(zone => <option key={zone}>{zone}</option>)}
            </select>
          </div>
          <div className="ci-search">
            <input type="text" placeholder="Search completed issues..." />
          </div>
        </section>
        {/* Issues List */}
        <section className="ci-list-section">
          <div className="ci-list-header">
            <div>
              <span className="ci-list-title">Completed Issues</span>
              <span className="ci-list-count">24 issues that have been successfully resolved</span>
            </div>
            <span className="ci-status-badge"><span className="ci-status-dot">●</span> Completed</span>
          </div>
          <div className="ci-table">
            <div className="ci-table-row ci-table-head">
              <div>ISSUE TITLE</div>
              <div>CATEGORY</div>
              <div>ZONE</div>
              <div>DEADLINE</div>
              <div>STATUS</div>
              <div>COMPLETED DATE</div>
              <div>ACTION</div>
            </div>
            {issues.map((issue, idx) => (
              <div className="ci-table-row ci-table-body" key={idx}>
                <div className="ci-issue-title-cell">
                  <div className={`ci-issue-icon ci-issue-${issue.categoryColor}`}></div>
                  <div>
                    <div className="ci-issue-title">{issue.title}</div>
                    <div className="ci-issue-location">{issue.location}</div>
                  </div>
                </div>
                <div>
                  <span className={`ci-category-badge ci-cat-${issue.categoryColor}`}>{issue.category}</span>
                </div>
                <div>{issue.zone}</div>
                <div>
                  <span className="ci-deadline">{issue.deadline}</span>
                  <div className="ci-priority">{issue.priority}</div>
                </div>
                <div>
                  <span className="ci-status-label">✔ Completed</span>
                </div>
                <div>
                  <span className="ci-completed-date">{issue.completedDate}</span>
                  <div className="ci-completed-early">{issue.completedEarly}</div>
                </div>
                <div>
                  <button className="ci-view-btn"><FaEye /> View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}