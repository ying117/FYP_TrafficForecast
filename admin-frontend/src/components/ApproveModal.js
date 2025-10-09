import React, { useState } from "react";

function ApproveModal({ incident, onClose, onApprove }) {
  const [tags, setTags] = useState("");

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
            placeholder="e.g. recurring, verified, roadwork..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-outline">
            Cancel
          </button>
          <button onClick={onApprove} className="btn-success">
            Approve Incident
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApproveModal;
