import React, { useState } from "react";

function ApproveModal({ incident, onClose, onApprove }) {
  const [tags, setTags] = useState("");

  const handleApprove = () => {
    // Convert tags string to array and automatically add "verified" tag
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    // Add "verified" tag if not already present
    if (!tagsArray.some((tag) => tag.toLowerCase() === "verified")) {
      tagsArray.push("verified");
    }

    onApprove(tagsArray); // Pass tags to parent
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Approve Incident</h3>
          <button onClick={onClose} className="close-btn">
            ×
          </button>
        </div>
        <div className="approve-form">
          <label>Add Tags (optional)</label>
          <input
            type="text"
            placeholder="e.g. urgent, recurring..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <p className="help-text">Separate multiple tags with commas.</p>
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-outline">
            Cancel
          </button>
          <button onClick={handleApprove} className="btn-success">
            Approve Incident
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApproveModal;
