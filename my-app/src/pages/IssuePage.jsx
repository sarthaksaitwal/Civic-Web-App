import React, { useState } from "react";
import "../styles/IssuePage.css";
import { FaEye, FaEdit, FaTrash, FaFilter } from "react-icons/fa";

const issues = [
  {
    title: "Pothole Repair on Oak Street",
    desc: "Large pothole causing traffic hazards at Oak Street & 3rd Avenue intersection. Multiple residents have reported tire damage.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
    category: "Roads & Transportation",
    date: "Dec 15, 2024 - 2:30 PM",
    zone: "North District",
    status: "Pending",
    statusColor: "pending",
  },
  {
    title: "Street Light Not Working on Main Avenue",
    desc: "Street light has been out for over a week creating safety concerns for pedestrians and drivers during nighttime.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80",
    category: "Electricity",
    date: "Dec 14, 2024 - 9:15 AM",
    zone: "East District",
    status: "In Progress",
    statusColor: "progress",
  },
  {
    title: "Overflowing Garbage Bins on Pine Street",
    desc: "Multiple garbage bins are overflowing attracting pests and creating unsanitary conditions in the residential area.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80",
    category: "Waste Management",
    date: "Dec 13, 2024 - 4:45 PM",
    zone: "South District",
    status: "Resolved",
    statusColor: "resolved",
  },
  {
    title: "Water Pipe Burst on Cedar Lane",
    desc: "Water pipe burst causing flooding and water supply disruption in the area.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80",
    category: "Water",
    date: "Dec 12, 2024 - 11:00 AM",
    zone: "West District",
    status: "In Progress",
    statusColor: "progress",
  },
];

export default function IssuePage() {
  const [search, setSearch] = useState("");
  return (
    <main className="issue-main">
      <div className="issue-header">
        <div>
          <h1>Reported Issues</h1>
          <p>Manage and track all civic issues reported by citizens</p>
        </div>
        <div className="issue-header-actions">
          <button className="issue-btn-primary">+ Report New Issue</button>
          <button className="issue-btn-filter"><FaFilter /> Filter</button>
          <div className="issue-search">
            <input
              type="text"
              placeholder="Search issues..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="issue-header-profile">
            <span className="issue-header-bell">🔔<span className="issue-header-badge">3</span></span>
            <img
              className="issue-header-avatar"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin"
            />
            <div>
              <span className="issue-header-name">John Admin</span>
              <span className="issue-header-role">Administrator</span>
            </div>
          </div>
        </div>
      </div>
      <div className="issue-filters-row">
        <select>
          <option>All Status</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <select>
          <option>All Departments</option>
          <option>Roads & Transportation</option>
          <option>Electricity</option>
          <option>Waste Management</option>
          <option>Water</option>
        </select>
        <select>
          <option>All Zones</option>
          <option>North District</option>
          <option>East District</option>
          <option>South District</option>
          <option>West District</option>
        </select>
        <div className="issue-sort">
          <label>Sort by:</label>
          <select>
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Status</option>
          </select>
        </div>
      </div>
      <div className="issue-list">
        {issues.map((issue, idx) => (
          <div className="issue-card" key={idx}>
            <img src={issue.img} alt={issue.title} className="issue-card-img" />
            <div className="issue-card-content">
              <div className="issue-card-title">{issue.title}</div>
              <div className="issue-card-desc">{issue.desc}</div>
              <div className="issue-card-meta">
                <span className="issue-card-meta-item">
                  <span role="img" aria-label="category">🏢</span> {issue.category}
                </span>
                <span className="issue-card-meta-item">
                  <span role="img" aria-label="date">📅</span> {issue.date}
                </span>
                <span className="issue-card-meta-item">
                  <span role="img" aria-label="zone">📍</span> {issue.zone}
                </span>
              </div>
            </div>
            <div className="issue-card-actions">
              <span className={`issue-status-badge ${issue.statusColor}`}>{issue.status}</span>
              <button className="issue-action-btn"><FaEye /></button>
              <button className="issue-action-btn"><FaEdit /></button>
              <button className="issue-action-btn"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}