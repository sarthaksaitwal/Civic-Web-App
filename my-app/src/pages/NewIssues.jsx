import React from "react";
import "../styles/NewIssues.css";
import { FaBars, FaEye, FaBell } from "react-icons/fa";

const issues = [
  {
    title: "Large Pothole on Main Street",
    location: "Downtown District, Main St & 5th Ave",
    category: "Road",
    categoryColor: "road",
    zone: "North",
    deadline: "Today",
    priority: "High Priority",
    reported: "2 hours ago",
    reporter: "Sarah Johnson",
  },
  {
    title: "Street Light Not Working",
    location: "North Park Avenue, Block 12",
    category: "Electricity",
    categoryColor: "electricity",
    zone: "North",
    deadline: "Tomorrow",
    priority: "Medium Priority",
    reported: "5 hours ago",
    reporter: "Mike Davis",
  },
  {
    title: "Water Pipe Leak",
    location: "Elm Street, Residential Area",
    category: "Water",
    categoryColor: "water",
    zone: "East",
    deadline: "3 days",
    priority: "Low Priority",
    reported: "1 day ago",
    reporter: "Alex Chen",
  },
  {
    title: "Overflowing Garbage Bin",
    location: "Oak Park, Near Playground",
    category: "Waste",
    categoryColor: "waste",
    zone: "West",
    deadline: "2 days",
    priority: "Medium Priority",
    reported: "3 hours ago",
    reporter: "Emma Wilson",
  },
  {
    title: "Traffic Signal Malfunction",
    location: "Oak Street & Pine Ave Intersection",
    category: "Other",
    categoryColor: "other",
    zone: "South",
    deadline: "4 hours",
    priority: "Critical",
    reported: "6 hours ago",
    reporter: "David Brown",
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

export default function NewIssues({ onDashboardClick }) {
  return (
    <div className="ni-root">
      {/* Sidebar */}
      {/* <aside className="ni-sidebar">
        <div className="ni-logo">
          <img src="https://img.icons8.com/ios-filled/40/4a90e2/city-buildings.png" alt="CivicTrack" />
          <span>CivicTrack</span>
          <FaBars className="ni-menu" />
        </div>
        <nav className="ni-nav">
          <a
            href="#"
            className="ni-nav-item"
            onClick={e => { e.preventDefault(); onDashboardClick(); }}
          >
            Dashboard
          </a>
          <a href="#" className="ni-nav-item">Profile</a>
          <a href="#" className="ni-nav-item">Settings</a>
          <a href="#" className="ni-nav-item">Reports & Analytics</a>
        </nav>
      </aside> */}
      {/* Main Content */}
      <main className="ni-main">
        {/* Header */}
        <header className="ni-header">
          <div>
            <h1 className="ni-title">New Issues</h1>
            <p className="ni-desc">Manage and review newly reported civic issues</p>
          </div>
          <div className="ni-user">
            <FaBell className="ni-bell" />
            <span className="ni-badge">3</span>
            <img className="ni-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" />
            <div className="ni-user-info">
              <span className="ni-user-name">John Admin</span>
              <span className="ni-user-role">Administrator</span>
            </div>
          </div>
        </header>
        {/* Filters */}
        <section className="ni-filters">
          <div className="ni-filter-group">
            <label>Deadline:</label>
            <select>
              <option>All</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="ni-filter-group">
            <label>Category:</label>
            <select>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="ni-filter-group">
            <label>Zone:</label>
            <select>
              {zones.map(zone => <option key={zone}>{zone}</option>)}
            </select>
          </div>
          <div className="ni-search">
            <input type="text" placeholder="Search issues by keywords..." />
          </div>
        </section>
        {/* Issues List */}
        <section className="ni-list-section">
          <div className="ni-list-header">
            <div>
              <span className="ni-list-title">Issues List</span>
              <span className="ni-list-count">24 new issues requiring attention</span>
            </div>
            <button className="ni-new-issue-btn">+ New Issues</button>
          </div>
          <div className="ni-table">
            <div className="ni-table-row ni-table-head">
              <div>ISSUE TITLE</div>
              <div>CATEGORY</div>
              <div>ZONE</div>
              <div>DEADLINE</div>
              <div>REPORTED</div>
              <div>ACTION</div>
            </div>
            {issues.map((issue, idx) => (
              <div className="ni-table-row ni-table-body" key={idx}>
                <div>
                  <div className={`ni-issue-icon ni-issue-${issue.categoryColor}`}></div>
                  <div>
                    <div className="ni-issue-title">{issue.title}</div>
                    <div className="ni-issue-location">{issue.location}</div>
                  </div>
                </div>
                <div>
                  <span className={`ni-category-badge ni-cat-${issue.categoryColor}`}>{issue.category}</span>
                </div>
                <div>{issue.zone}</div>
                <div>
                  <span className={`ni-deadline ${issue.deadline === "Today" ? "ni-deadline-today" : issue.deadline === "Tomorrow" ? "ni-deadline-tomorrow" : ""}`}>
                    {issue.deadline}
                  </span>
                  <div className="ni-priority">{issue.priority}</div>
                </div>
                <div>
                  <div className="ni-reported">{issue.reported}</div>
                  <div className="ni-reporter">by {issue.reporter}</div>
                </div>
                <div>
                  <button className="ni-view-btn"><FaEye /> View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}