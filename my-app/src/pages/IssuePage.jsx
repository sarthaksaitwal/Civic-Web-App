import React, { useState, useMemo } from "react";
import "./../styles/IssuePage.css";
import IssueListItem from "../components/IssueListItem.jsx";

const statuses = ["All", "Pending", "Completed", "Manual", "In Progress", "Resolved"];

const randomImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80"
];
const randomDescs = [
  "Reported by local resident. Needs urgent attention.",
  "Issue detected during routine inspection.",
  "Citizen complaint received via mobile app.",
  "Reported by city staff. Awaiting assignment."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function IssuePage() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [deadlineFilter, setDeadlineFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [zoneFilter, setZoneFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Use useMemo to generate issues only once
  const issues = useMemo(() => [
    { token: "TK001", status: "Pending", desc: getRandom(randomDescs), date: "Dec 10, 2024 - 10:00 AM", zone: "Central District", img: getRandom(randomImages), category: "Roads", deadline: "2 days" },
    { token: "TK002", status: "Completed", desc: getRandom(randomDescs), date: "Dec 11, 2024 - 11:00 AM", zone: "Central District", img: getRandom(randomImages), category: "Electricity", deadline: "1 day" },
    { token: "TK003", status: "Manual", desc: getRandom(randomDescs), date: "Dec 12, 2024 - 12:00 PM", zone: "Central District", img: getRandom(randomImages), category: "Water", deadline: "3 days" },
    {
      token: "TK004",
      desc: "Large pothole causing traffic hazards at Oak Street & 3rd Avenue intersection. Multiple residents have reported tire damage.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
      category: "Roads",
      date: "Dec 15, 2024 - 2:30 PM",
      zone: "North District",
      status: "Pending",
      deadline: "2 days"
    },
    {
      token: "TK005",
      desc: "Street light has been out for over a week creating safety concerns for pedestrians and drivers during nighttime.",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80",
      category: "Electricity",
      date: "Dec 14, 2024 - 9:15 AM",
      zone: "East District",
      status: "In Progress",
      deadline: "1 day"
    },
    {
      token: "TK006",
      desc: "Multiple garbage bins are overflowing attracting pests and creating unsanitary conditions in the residential area.",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=80&q=80",
      category: "Waste Management",
      date: "Dec 13, 2024 - 4:45 PM",
      zone: "South District",
      status: "Resolved",
      deadline: "0 days"
    },
    {
      token: "TK007",
      desc: "Water pipe burst causing flooding and water supply disruption in the area.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80",
      category: "Water",
      date: "Dec 12, 2024 - 11:00 AM",
      zone: "West District",
      status: "In Progress",
      deadline: "3 days"
    },
  ], []);

  // Filter logic for deadline, category, zone, and search
  let filteredIssues = issues;
  if (statusFilter !== "All") filteredIssues = filteredIssues.filter(issue => issue.status === statusFilter);
  if (deadlineFilter !== "All") filteredIssues = filteredIssues.filter(issue => issue.deadline === deadlineFilter);
  if (categoryFilter !== "All") filteredIssues = filteredIssues.filter(issue => issue.category === categoryFilter);
  if (zoneFilter !== "All") filteredIssues = filteredIssues.filter(issue => issue.zone === zoneFilter);
  if (search.trim() !== "") {
    filteredIssues = filteredIssues.filter(
      issue =>
        issue.token.toLowerCase().includes(search.toLowerCase()) ||
        issue.desc.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Get unique values for filters
  const deadlines = ["All", ...Array.from(new Set(issues.map(i => i.deadline)))];
  const categories = ["All", ...Array.from(new Set(issues.map(i => i.category)))];
  const zones = ["All", ...Array.from(new Set(issues.map(i => i.zone)))];

  return (
    <div className="issue-page-main">
      <div className="issue-page-header" style={{ justifyContent: "space-between" }}>
        <h2>Reported Issues</h2>
      </div>
      <div className="issue-filters-search-row">
        <div className="issue-filters-row">
          <div className="issue-filter-group">
            <label>Status</label>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="status-filter">
              {statuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="issue-filter-group">
            <label>Deadline</label>
            <select value={deadlineFilter} onChange={e => setDeadlineFilter(e.target.value)} className="status-filter">
              {deadlines.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="issue-filter-group">
            <label>Category</label>
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="status-filter">
              {categories.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="issue-filter-group">
            <label>Zone</label>
            <select value={zoneFilter} onChange={e => setZoneFilter(e.target.value)} className="status-filter">
              {zones.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="issue-search-bar">
          <input
            type="text"
            className="issue-search-input"
            placeholder="Search by token or description"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="issue-list">
        {filteredIssues.map(issue => (
          <IssueListItem
            key={issue.token}
            token={issue.token}
            status={issue.status}
            desc={issue.desc}
            date={issue.date}
            zone={issue.zone}
            img={issue.img}
          />
        ))}
      </div>
    </div>
  );
}

export default IssuePage;

