import React, { useState } from "react";
import "../styles/ReportAna.css";

const mockCategoryData = [
  { category: "Road", issues: 320 },
  { category: "Lighting", issues: 210 },
  { category: "Sanitation", issues: 180 },
  { category: "Parks", issues: 90 },
  { category: "Other", issues: 60 },
];

const mockZoneData = [
  { zone: "North District", issues: 120 },
  { zone: "South District", issues: 95 },
  { zone: "East District", issues: 80 },
  { zone: "West District", issues: 70 },
  { zone: "Central District", issues: 55 },
];

const topZones = [
  { zone: "North District", total: 342, pending: 89, completed: 253, rate: "74%" },
  { zone: "South District", total: 298, pending: 76, completed: 222, rate: "75%" },
  { zone: "East District", total: 267, pending: 67, completed: 200, rate: "75%" },
  { zone: "West District", total: 234, pending: 58, completed: 176, rate: "75%" },
  { zone: "Central District", total: 106, pending: 34, completed: 72, rate: "68%" },
];

export default function ReportAna() {
  const [period, setPeriod] = useState("week");

  return (
    <div className="report-dashboard">
      {/* <aside className="report-sidebar">
        <div className="report-logo">
          <span role="img" aria-label="logo">📊</span> CivicTrack
        </div>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Dashboard</li>
            <li>Issues</li>
            <li className="active">Reports & Analytics</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside> */}
      <main className="report-main-content">
        <header className="report-header">
          <div>
            <h1>Reports & Analytics</h1>
            <p>Comprehensive overview of civic issue management performance</p>
          </div>
          <div className="report-profile">
            <span className="notif">🔔<span className="notif-count">3</span></span>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" />
            <div>
              <strong>John Admin</strong>
              <span>Administrator</span>
            </div>
          </div>
        </header>
        <section className="report-period-card">
          <div className="period-buttons">
            <button className={period === "today" ? "active" : ""} onClick={() => setPeriod("today")}>Today</button>
            <button className={period === "week" ? "active" : ""} onClick={() => setPeriod("week")}>This Week</button>
            <button className={period === "month" ? "active" : ""} onClick={() => setPeriod("month")}>This Month</button>
          </div>
        </section>
        <section className="report-stats-grid">
          <div className="report-stat blue">
            <div className="stat-title">Total Issues</div>
            <div className="stat-value">1,247</div>
            <div className="stat-desc">+12% from last week</div>
            <span className="stat-icon">ℹ️</span>
          </div>
          <div className="report-stat orange">
            <div className="stat-title">Pending Issues</div>
            <div className="stat-value">324</div>
            <div className="stat-desc">-8% from last week</div>
            <span className="stat-icon">🕒</span>
          </div>
          <div className="report-stat green">
            <div className="stat-title">Completed Issues</div>
            <div className="stat-value">892</div>
            <div className="stat-desc">+15% from last week</div>
            <span className="stat-icon">✅</span>
          </div>
          <div className="report-stat red">
            <div className="stat-title">Reverted Issues</div>
            <div className="stat-value">31</div>
            <div className="stat-desc">+3% from last week</div>
            <span className="stat-icon">❌</span>
          </div>
          <div className="report-stat purple">
            <div className="stat-title">Avg Resolution Time</div>
            <div className="stat-value">4.2</div>
            <div className="stat-desc">days</div>
            <span className="stat-icon">⏱️</span>
          </div>
          <div className="report-stat teal">
            <div className="stat-title">Worker Efficiency</div>
            <div className="stat-value">87%</div>
            <div className="stat-desc">+5% from last week</div>
            <span className="stat-icon">👥</span>
          </div>
        </section>
        <section className="report-cards-row">
          <div className="report-card">
            <h3>Issues by Category</h3>
            <ul>
              {mockCategoryData.map((cat) => (
                <li key={cat.category}>
                  <span>{cat.category}</span>
                  <span className="issue-count">{cat.issues}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="report-card">
            <h3>Issues by Zone</h3>
            <ul>
              {mockZoneData.map((zone) => (
                <li key={zone.zone}>
                  <span>{zone.zone}</span>
                  <span className="issue-count">{zone.issues}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="report-table-card">
          <h3>Top 5 Zones with Highest Issues</h3>
          <table>
            <thead>
              <tr>
                <th>Zone</th>
                <th>Total Issues</th>
                <th>Pending</th>
                <th>Completed</th>
                <th>Resolution Rate</th>
              </tr>
            </thead>
            <tbody>
              {topZones.map((z) => (
                <tr key={z.zone}>
                  <td>{z.zone}</td>
                  <td>{z.total}</td>
                  <td className="pending">{z.pending}</td>
                  <td className="completed">{z.completed}</td>
                  <td>{z.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}