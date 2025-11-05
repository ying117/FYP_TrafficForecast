//working
import React from "react";

function IncidentCard({
  incident,
  onAIAnalysis,
  onApprove,
  onReject,
  onAddTags,
}) {
  // Safely handle tags with comprehensive error checking
  const getTagsArray = () => {
    try {
      // Check if tags exists and is a string
      if (!incident.tags || typeof incident.tags !== "string") {
        return [];
      }

      // Handle empty string
      if (incident.tags.trim() === "") {
        return [];
      }

      // Split and process tags
      return incident.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""); // Remove empty strings
    } catch (error) {
      console.error("Error processing tags:", error, incident.tags);
      return [];
    }
  };

  // Function to capitalize first letter of each word
  const capitalizeWords = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const tagsArray = getTagsArray();
  const hasVerifiedTag = tagsArray.some(
    (tag) => tag.toLowerCase() === "verified"
  );

  return (
    <div className="incident-card">
      <div className="incident-header">
        <div className="location-section">
          <h4>{incident.location}</h4>
          {/* Display full address directly under location */}
          {incident.fullAddress && (
            <p className="full-address">Address: {incident.fullAddress}</p>
          )}
        </div>
        <div className="incident-tags">
          {/* Show Verified tag FIRST if incident has verified tag */}
          {hasVerifiedTag && <span className="verified-tag">Verified</span>}

          {/* Show Approved tag if incident is approved */}
          {incident.status === "approved" && (
            <span className="approved-tag">Approved</span>
          )}

          {/* Show Rejected tag if incident is rejected */}
          {incident.status === "rejected" && (
            <span className="rejected-tag">Rejected</span>
          )}

          <span
            className={`severity-tag ${
              incident.severity?.toLowerCase() || "medium"
            }`}
          >
            {capitalizeWords(incident.severity)}
          </span>
          <span className="type-tag">
            {capitalizeWords(incident.incidentType)}
          </span>

          {/* Show other custom tags (excluding verified since we show it separately) */}
          {tagsArray.map((tag, index) => {
            const lowerTag = tag.toLowerCase();
            // Skip verified tag since we show it separately at the beginning
            if (lowerTag === "verified") return null;

            return (
              <span
                key={index}
                className={
                  lowerTag === "urgent" || lowerTag === "recurring"
                    ? "type-tag"
                    : "type-tag"
                }
              >
                {capitalizeWords(tag)}
              </span>
            );
          })}
        </div>
      </div>

      {/* Show rejection reason if available */}
      {incident.status === "rejected" && incident.reason && (
        <div className="rejection-reason">
          <strong>Rejection Reason:</strong>
          <p>{incident.reason}</p>
        </div>
      )}

      <p className="incident-description">{incident.description}</p>
      {incident.photo_url && (
        <div className="incident-photo">
          <img
            src={incident.photo_url}
            alt="Incident"
            className="photo-preview"
          />
        </div>
      )}
      <div className="incident-meta">
        <span>
          Reported by: {incident.users?.name || `User ${incident.user_id}`}
        </span>
        <span>{new Date(incident.createdAt).toLocaleDateString()}</span>
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
