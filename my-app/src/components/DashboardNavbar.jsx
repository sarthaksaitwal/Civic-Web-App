import React from "react";
import "../styles/DashboardNavbar.css";

export default function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <ul>
        <li className="active">Overview</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}