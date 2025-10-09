import React from "react";

function BulkActionsTab({
  incidents,
  selectedIncidents,
  toggleIncidentSelection,
  selectAllIncidents,
  clearSelection,
}) {
  return (
    <div className="bulk-actions-tab">
      <div className="bulk-header">
        <span>
          {selectedIncidents.length} of {incidents.length} selected
        </span>
        <div className="bulk-actions">
          <button onClick={selectAllIncidents} className="btn-outline">
            Select All
          </button>
          <button onClick={clearSelection} className="btn-outline">
            Clear Selection
          </button>
        </div>
      </div>

      <div className="bulk-incidents-list">
        {incidents.map((incident) => (
          <div key={incident.id} className="bulk-incident-item">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedIncidents.includes(incident.id)}
                onChange={() => toggleIncidentSelection(incident.id)}
              />
              <div className="incident-details">
                <strong>{incident.location}</strong>
                <span className="incident-type">
                  ({incident.severity}) ({incident.type})
                </span>
                <p>{incident.description}</p>
                <div className="incident-meta">
                  By: {incident.reportedBy} • {incident.date} •{" "}
                  {incident.source}
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="bulk-action-buttons">
        <button
          className="btn-success"
          disabled={selectedIncidents.length === 0}
        >
          Approve Selected ({selectedIncidents.length})
        </button>
        <button
          className="btn-warning"
          disabled={selectedIncidents.length === 0}
        >
          Reject Selected
        </button>
        <button
          className="btn-danger"
          disabled={selectedIncidents.length === 0}
        >
          Delete Selected
        </button>
      </div>
    </div>
  );
}

export default BulkActionsTab;
