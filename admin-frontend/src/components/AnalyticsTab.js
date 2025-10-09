import React, { useState } from "react";

function AnalyticsTab() {
  const [timeRange, setTimeRange] = useState("7days");

  const analyticsData = {
    totalReports: 50,
    activeUsers: 300,
    reportAccuracy: 87.67,
    avgReportsPerUser: 0.6,
    hotspots: [
      { location: "Orchard Road", incidents: 8 },
      { location: "Jurong Gateway Road", incidents: 7 },
      { location: "Airport Boulevard", incidents: 6 },
      { location: "Marina Bay Drive", incidents: 5 },
      { location: "Bugis Street", incidents: 4 },
    ],
    incidentTypes: [
      { type: "Breakdown", count: 17 },
      { type: "Accident", count: 13 },
      { type: "Community Report", count: 10 },
      { type: "Roadwork", count: 8 },
      { type: "Weather", count: 2 },
    ],
    topContributors: [
      { user: "driver1", reports: 25 },
      { user: "driver2", reports: 18 },
      { user: "driver3", reports: 16 },
      { user: "driver4", reports: 12 },
      { user: "driver5", reports: 10 },
    ],
  };

  return (
    <div className="analytics-tab">
      <div className="time-filters">
        <button
          className={timeRange === "7days" ? "active" : ""}
          onClick={() => setTimeRange("7days")}
        >
          Last 7 days
        </button>
        <button
          className={timeRange === "30days" ? "active" : ""}
          onClick={() => setTimeRange("30days")}
        >
          Last 30 days
        </button>
        <button
          className={timeRange === "90days" ? "active" : ""}
          onClick={() => setTimeRange("90days")}
        >
          Last 90 days
        </button>
      </div>

      <div className="analytics-grid">
        <div className="analytics-stats">
          <div className="analytics-stat">
            <h4>Total Reports</h4>
            <div className="stat-number">{analyticsData.totalReports}</div>
          </div>
          <div className="analytics-stat">
            <h4>Active Users ({analyticsData.activeUsers})</h4>
            <div className="stat-number">{analyticsData.activeUsers}</div>
          </div>
          <div className="analytics-stat">
            <h4>Report Accuracy</h4>
            <div className="stat-number">{analyticsData.reportAccuracy}%</div>
          </div>
          <div className="analytics-stat">
            <h4>Avg Reports per User</h4>
            <div className="stat-number">{analyticsData.avgReportsPerUser}</div>
          </div>
        </div>

        <div className="analytics-lists">
          <div className="analytics-list">
            <h4>Accident Hotspots</h4>
            {analyticsData.hotspots.map((hotspot, index) => (
              <div key={index} className="list-item">
                <span className="rank">{index + 1}</span>
                <span className="location">{hotspot.location}</span>
                <span className="count">{hotspot.incidents} incidents</span>
              </div>
            ))}
          </div>

          <div className="analytics-list">
            <h4>Incident Types</h4>
            {analyticsData.incidentTypes.map((item, index) => (
              <div key={index} className="list-item">
                <span className="rank">{index + 1}</span>
                <span className="type">{item.type}</span>
                <span className="count">{item.count}</span>
              </div>
            ))}
          </div>

          <div className="analytics-list">
            <h4>Top Contributors</h4>
            {analyticsData.topContributors.map((contributor, index) => (
              <div key={index} className="list-item">
                <span className="rank">{index + 1}</span>
                <span className="user">{contributor.user}</span>
                <span className="count">{contributor.reports} reports</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsTab;
