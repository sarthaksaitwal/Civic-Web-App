import React from "react";
import { FaUser, FaChartBar, FaExclamationTriangle, FaFileAlt, FaCog, FaBars } from "react-icons/fa";
import "../styles/Sidebar.css";

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="https://img.icons8.com/ios-filled/40/19e3d7/city-buildings.png" alt="CivicTrack" />
        <span>CivicTrack</span>
        <FaBars style={{ marginLeft: "auto", color: "#cfd8dc" }} />
      </div>
      <nav>
        <ul>
          <li className={active === "profile" ? "active" : ""} onClick={() => onNavigate("profile")}>
            <FaUser /> Profile
          </li>
          <li className={active === "dashboard" ? "active" : ""} onClick={() => onNavigate("dashboard")}>
            <FaChartBar /> Dashboard
          </li>
          <li className={active === "issues" ? "active" : ""} onClick={() => onNavigate("newissues")}>
            <FaExclamationTriangle /> Issues
          </li>
          <li className={active === "reports" ? "active" : ""} onClick={() => onNavigate("reports")}>
            <FaFileAlt /> Reports & Analytics
          </li>
          <li className={active === "settings" ? "active" : ""} onClick={() => onNavigate("settings")}>
            <FaCog /> Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}