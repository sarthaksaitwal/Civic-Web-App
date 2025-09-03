import React from "react";
import "../styles/IssuePage.css";

const PLACEHOLDER_IMG = "https://via.placeholder.com/60?text=No+Image";

function IssueListItem({ token, status, desc, date, zone, img, onViewDetails }) {
  return (
    <div className="issue-card">
      <img
        src={img || PLACEHOLDER_IMG}
        alt="Issue"
        className="issue-card-img"
      />
      <div className="issue-card-content">
        <div className="issue-card-title">Token No: {token}</div>
        <div className="issue-card-desc">
          {desc && desc !== "No description" ? desc : "No description provided."}
        </div>
        <div className="issue-card-meta">
          <span className="issue-card-meta-item">{date}</span>
          <span className="issue-card-meta-item">{zone}</span>
        </div>
      </div>
      <div className="issue-card-actions">
        <span className={`issue-status-badge ${status.toLowerCase().replace(/\s/g, "")}`}>{status}</span>
        <button className="issue-action-btn" onClick={onViewDetails}>View Details</button>
      </div>
    </div>
  );
}

export default IssueListItem;