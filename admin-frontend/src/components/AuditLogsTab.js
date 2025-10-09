import React from "react";

function AuditLogsTab() {
  const logs = [
    {
      id: 1,
      action: "User Ban Responses",
      user: "admin123",
      description: "Approved unban appeal from driver87",
      details:
        "Reason: User's incident reports were analysed to check for validity and they were found to be accurate, thus user has been unbanned",
      date: "Sep 10, 2025 9:07 PM",
    },
    {
      id: 2,
      action: "Report Removal Responses",
      user: "admin123",
      description: "Approved community report about accident on Orchard Road",
      details: "Reason: Verified with photo evidence",
      date: "Sep 10, 2025 9:07 PM",
    },
    {
      id: 3,
      action: "User Ban Responses",
      user: "admin123",
      description: "Banned driver45 for submitting false reports",
      details: "Reason: Multiple spam reports detected",
      date: "Sep 9, 2025 6:08 PM",
    },
    {
      id: 4,
      action: "Bulk Actions",
      user: "admin123",
      description: "Bulk deleted 15 spam incident reports",
      details: "Reason: Mass spam removal from bot accounts",
      date: "Sep 8, 2025 8:15 PM",
    },
  ];

  return (
    <div className="audit-logs-tab">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search logs..."
          className="search-input"
        />
        <select className="filter-select">
          <option value="all">All Actions</option>
          <option value="user-ban">User Ban Responses</option>
          <option value="report-removal">Report Removal Responses</option>
          <option value="bulk-actions">Bulk Actions</option>
        </select>
      </div>

      <div className="logs-list">
        {logs.map((log) => (
          <div key={log.id} className="log-entry">
            <div className="log-header">
              <span className="log-action">
                {log.action} by {log.user}
              </span>
              <span className="log-date">{log.date}</span>
            </div>
            <div className="log-description">{log.description}</div>
            <div className="log-details">{log.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuditLogsTab;
