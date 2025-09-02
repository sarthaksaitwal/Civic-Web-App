import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NewIssues from "./pages/NewIssues.jsx";
import PendingIssues from "./pages/PendingIssues.jsx";
import CompletedIssues from "./pages/CompletedIssues.jsx";
import ReportAna from "./pages/ReportAna.jsx";

function App() {
  const [page, setPage] = useState("login");

  // Map page to sidebar active key
  const getSidebarActive = () => {
    if (page === "dashboard") return "dashboard";
    if (page === "newissues" || page === "pendingissues" || page === "completedissues") return "issues";
    if (page === "profile") return "profile";
    if (page === "reports") return "reports";
    if (page === "settings") return "settings";
    return "";
  };

  return (
    <div className="app">
      {page !== "login" && (
        <Sidebar active={getSidebarActive()} onNavigate={setPage} />
      )}
      <div style={{ marginLeft: page !== "login" ? 240 : 0, width: "100%" }}>
        {page === "login" && (
          <LoginPage onLogin={() => setPage("dashboard")} />
        )}
        {page === "dashboard" && (
          <Dashboard
            onNewIssuesClick={() => setPage("newissues")}
            onPendingIssuesClick={() => setPage("pendingissues")}
            onCompletedIssuesClick={() => setPage("completedissues")}
          />
        )}
        {page === "profile" && (
          <Profile />
        )}
        {page === "newissues" && (
          <NewIssues onDashboardClick={() => setPage("dashboard")} />
        )}
        {page === "pendingissues" && (
          <PendingIssues onDashboardClick={() => setPage("dashboard")} />
        )}
        {page === "completedissues" && (
          <CompletedIssues onDashboardClick={() => setPage("dashboard")} />
        )}
        {page === "reports" && (
          <ReportAna />
        )}
      </div>
    </div>
  );
}

export default App;