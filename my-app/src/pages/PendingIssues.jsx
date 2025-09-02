import React from "react";
import "../styles/PendingIssues.css";
import { FaBars, FaEye, FaBell } from "react-icons/fa";

const issues = [
  {
    title: "Road Repair on Oak Street",
    location: "Oak Street & Maple Ave",
    category: "Road",
    categoryColor: "road",
    zone: "North",
    deadline: "2 days",
    deadlineColor: "danger",
    priority: "Medium Priority",
    assigned: "Mike Rodriguez",
    assignedImg: "https://randomuser.me/api/portraits/men/45.jpg",
    progress: 60,
    progressColor: "blue",
  },
  {
    title: "Electrical Line Maintenance",
    location: "Pine Avenue District",
    category: "Electricity",
    categoryColor: "electricity",
    zone: "East",
    deadline: "Overdue",
    deadlineColor: "danger",
    priority: "High Priority",
    assigned: "James Wilson",
    assignedImg: "https://randomuser.me/api/portraits/men/46.jpg",
    progress: 30,
    progressColor: "yellow",
  },
  {
    title: "Water Main Replacement",
    location: "Central District, Block 8",
    category: "Water",
    categoryColor: "water",
    zone: "South",
    deadline: "5 days",
    deadlineColor: "success",
    priority: "Low Priority",
    assigned: "Robert Kim",
    assignedImg: "https://randomuser.me/api/portraits/men/47.jpg",
    progress: 85,
    progressColor: "green",
  },
  {
    title: "Waste Collection Route Fix",
    location: "Residential Area, Zone 3",
    category: "Waste",
    categoryColor: "waste",
    zone: "West",
    deadline: "1 week",
    deadlineColor: "success",
    priority: "Low Priority",
    assigned: "Carlos Martinez",
    assignedImg: "https://randomuser.me/api/portraits/men/48.jpg",
    progress: 100,
    progressColor: "green",
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

export default function PendingIssues({ onDashboardClick }) {
  return (
    <div className="pi-root">
      {/* Sidebar */}
      {/* <aside className="pi-sidebar">
        <div className="pi-logo">
          <img src="https://img.icons8.com/ios-filled/40/4a90e2/city-buildings.png" alt="CivicTrack" />
          <span>CivicTrack</span>
          <FaBars className="pi-menu" />
        </div>
        <nav className="pi-nav">
          <a
            href="#"
            className="pi-nav-item"
            onClick={e => { e.preventDefault(); onDashboardClick(); }}
          >
            Dashboard
          </a>
          <a href="#" className="pi-nav-item">Profile</a>
          <a href="#" className="pi-nav-item">Settings</a>
          <a href="#" className="pi-nav-item">Reports & Analytics</a>
        </nav>
      </aside> */}
      {/* Main Content */}
      <main className="pi-main">
        {/* Header */}
        <header className="pi-header">
          <div>
            <h1 className="pi-title">Pending Issues</h1>
            <p className="pi-desc">Track and manage issues currently in progress</p>
          </div>
          <div className="pi-user">
            <FaBell className="pi-bell" />
            <span className="pi-badge">3</span>
            <img className="pi-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" />
            <div className="pi-user-info">
              <span className="pi-user-name">John Admin</span>
              <span className="pi-user-role">Administrator</span>
            </div>
          </div>
        </header>
        {/* Filters */}
        <section className="pi-filters">
          <div className="pi-filter-group">
            <label>Deadline:</label>
            <select>
              <option>All</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="pi-filter-group">
            <label>Category:</label>
            <select>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="pi-filter-group">
            <label>Zone:</label>
            <select>
              {zones.map(zone => <option key={zone}>{zone}</option>)}
            </select>
          </div>
          <div className="pi-search">
            <input type="text" placeholder="Search pending issues..." />
          </div>
        </section>
        {/* Issues List */}
        <section className="pi-list-section">
          <div className="pi-list-header">
            <div>
              <span className="pi-list-title">Pending Issues</span>
              <span className="pi-list-count">18 issues currently in progress</span>
            </div>
            <span className="pi-status-badge">● In Progress</span>
          </div>
          <div className="pi-table">
            <div className="pi-table-row pi-table-head">
              <div>ISSUE TITLE</div>
              <div>CATEGORY</div>
              <div>ZONE</div>
              <div>DEADLINE</div>
              <div>ASSIGNED TO</div>
              <div>PROGRESS</div>
              <div>ACTION</div>
            </div>
            {issues.map((issue, idx) => (
              <div className="pi-table-row pi-table-body" key={idx}>
                <div className="pi-issue-title-cell">
                  <div className={`pi-issue-icon pi-issue-${issue.categoryColor}`}></div>
                  <div>
                    <div className="pi-issue-title">{issue.title}</div>
                    <div className="pi-issue-location">{issue.location}</div>
                  </div>
                </div>
                <div>
                  <span className={`pi-category-badge pi-cat-${issue.categoryColor}`}>{issue.category}</span>
                </div>
                <div>{issue.zone}</div>
                <div>
                  <span className={`pi-deadline pi-deadline-${issue.deadlineColor}`}>{issue.deadline}</span>
                  <div className="pi-priority">{issue.priority}</div>
                </div>
                <div className="pi-assigned">
                  <img src={issue.assignedImg} alt={issue.assigned} className="pi-assigned-img" />
                  <span>{issue.assigned}</span>
                </div>
                <div>
                  <div className="pi-progress-bar-bg">
                    <div
                      className={`pi-progress-bar pi-progress-${issue.progressColor}`}
                      style={{ width: `${issue.progress}%` }}
                    ></div>
                  </div>
                  <span className="pi-progress-text">{issue.progress}%</span>
                </div>
                <div>
                  <button className="pi-view-btn"><FaEye /> View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}