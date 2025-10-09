import React, { useState } from "react";

function ExportTab() {
  const [dataType, setDataType] = useState("traffic-incidents");
  const [format, setFormat] = useState("csv");
  const [dateRange, setDateRange] = useState("7days");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleExport = () => {
    console.log("Exporting:", {
      dataType,
      format,
      dateRange,
      statusFilter,
    });
    alert("Export process started!");
  };

  return (
    <div className="export-tab">
      <div className="export-form">
        <div className="form-group">
          <label>Data Type</label>
          <select
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
          >
            <option value="traffic-incidents">Traffic Incidents</option>
            <option value="user-data">User Data</option>
            <option value="analytics">Analytics Data</option>
            <option value="audit-logs">Audit Logs</option>
          </select>
        </div>

        <div className="form-group">
          <label>Format</label>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="excel">Excel</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date Range</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status Filter</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active Only</option>
            <option value="pending">Pending Review</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <button onClick={handleExport} className="btn-primary export-btn">
          Export Data
        </button>
      </div>
    </div>
  );
}

export default ExportTab;
