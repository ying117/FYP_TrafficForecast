import React from "react";

function IncidentCard({
  incident,
  onAIAnalysis,
  onApprove,
  onReject,
  onAddTags,
}) {
  return (
    <div className="incident-card">
      <div className="incident-header">
        <h4>{incident.location}</h4>
        <div className="incident-tags">
          <span className={`severity-tag ${incident.severity.toLowerCase()}`}>
            {incident.severity}
          </span>
          <span className="type-tag">{incident.type}</span>
          <span className="source-tag">{incident.source}</span>
          {incident.tags?.includes("verified") && (
            <span className="verified-tag">verified</span>
          )}
        </div>
      </div>
      <p className="incident-description">{incident.description}</p>
      <div className="incident-meta">
        <span>Reported by: {incident.reportedBy}</span>
        <span>{incident.date}</span>
      </div>
      <div className="incident-actions">
        <button onClick={() => onAIAnalysis(incident)} className="btn-outline">
          AI Analysis
        </button>
        <button onClick={() => onApprove(incident)} className="btn-success">
          Approve
        </button>
        <button onClick={() => onReject(incident)} className="btn-danger">
          Reject
        </button>
        <button onClick={() => onAddTags(incident)} className="btn-outline">
          Add Tags
        </button>
      </div>
    </div>
  );
}

export default IncidentCard;
