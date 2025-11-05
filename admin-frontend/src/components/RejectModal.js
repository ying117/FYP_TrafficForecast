import React, { useState } from "react";

function RejectModal({ incident, onClose, onReject }) {
  const [reason, setReason] = useState("");

  const handleReject = () => {
    if (reason.trim()) {
      // For rejected incidents, we'll add "rejected" tag automatically
      // You can modify this to add "verified" if you want, or keep it as "rejected"
      const tags = ["verified"];
      onReject(reason, tags); // Pass both reason and tags to parent
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Reject Incident Report</h3>
          <button onClick={onClose} className="close-btn">
            ×
          </button>
        </div>
        <div className="reject-form">
          <label>Reason for rejection</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter detailed reason for rejection..."
            rows="4"
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-outline">
            Cancel
          </button>
          <button
            onClick={handleReject}
            className="btn-danger"
            disabled={!reason.trim()}
          >
            Reject Incident
          </button>
        </div>
      </div>
    </div>
  );
}

export default RejectModal;
