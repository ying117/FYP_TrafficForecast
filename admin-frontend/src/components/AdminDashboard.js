import React, { useState } from "react";
import "./AdminDashboard.css";
import HomeTab from "./HomeTab";
import IncidentsTab from "./IncidentsTab";
import UsersTab from "./UsersTab";
import AnalyticsTab from "./AnalyticsTab";
import AppealsTab from "./AppealsTab";
import BulkActionsTab from "./BulkActionsTab";
import AuditLogsTab from "./AuditLogsTab";
import ExportTab from "./ExportTab";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedIncidents, setSelectedIncidents] = useState([]);

  const tabs = [
    "Home",
    "Incidents",
    "Users",
    "Analytics",
    "Appeals",
    "Bulk Actions",
    "Audit Logs",
    "Export",
  ];

  // Demo data
  const incidents = [
    {
      id: 1,
      location: "Bugis Street",
      severity: "Medium",
      type: "Accident",
      source: "Community Report",
      description: "Traffic accident in that area",
      reportedBy: "driver5",
      date: "Sep 9, 1:49 PM",
      status: "pending",
    },
    {
      id: 2,
      location: "Jurong Gateway Road",
      severity: "Low",
      type: "Roadwork",
      source: "System",
      description: "Scheduled road maintenance. Expect delays.",
      reportedBy: "System",
      date: "Sep 7, 5:20 PM",
      status: "approved",
    },
    {
      id: 3,
      location: "Sentosa Gateway",
      severity: "Heavy Traffic",
      type: "Congestion",
      source: "Community Report",
      description: "Heavy congestion at Sentosa entrance.",
      reportedBy: "driver1",
      date: "Sep 6, 6:37 PM",
      status: "pending",
      tags: ["verified"],
    },
  ];

  const users = [
    {
      id: 1,
      username: "moderator1",
      email: "moderator1@example.com",
      status: "Active",
      role: "Moderator",
      lastActive: "2 Hours Ago",
    },
    {
      id: 2,
      username: "driver1",
      email: "driver1@example.com",
      status: "Active",
      role: "User",
      lastActive: "1 Day Ago",
    },
    {
      id: 3,
      username: "driver54",
      email: "driver54@example.com",
      status: "Banned",
      role: "User",
      lastActive: "2 Days Ago",
    },
    {
      id: 4,
      username: "admin123",
      email: "admin123@example.com",
      status: "Active",
      role: "Admin",
      lastActive: "2 Hours Ago",
    },
    {
      id: 5,
      username: "driver999",
      email: "driver999@example.com",
      status: "Inactive",
      role: "User",
      lastActive: "21 Days Ago",
    },
  ];

  const stats = {
    totalUsers: 670,
    pendingReviews: 17,
    pendingAppeals: 3,
    todaysReports: 25,
    bannedUsers: 3,
    verifiedReports: 5,
  };

  const toggleIncidentSelection = (id) => {
    setSelectedIncidents((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAllIncidents = () => {
    setSelectedIncidents(incidents.map((i) => i.id));
  };

  const clearSelection = () => {
    setSelectedIncidents([]);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Managing users, incidents, and platform moderation</p>
      </header>

      {/* Navigation Tabs */}
      <nav className="admin-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab.toLowerCase() ? "active" : ""}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "home" && <HomeTab stats={stats} />}
        {activeTab === "incidents" && <IncidentsTab incidents={incidents} />}
        {activeTab === "users" && <UsersTab users={users} />}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "appeals" && <AppealsTab />}
        {activeTab === "bulk actions" && (
          <BulkActionsTab
            incidents={incidents}
            selectedIncidents={selectedIncidents}
            toggleIncidentSelection={toggleIncidentSelection}
            selectAllIncidents={selectAllIncidents}
            clearSelection={clearSelection}
          />
        )}
        {activeTab === "audit logs" && <AuditLogsTab />}
        {activeTab === "export" && <ExportTab />}
      </div>
    </div>
  );
}
