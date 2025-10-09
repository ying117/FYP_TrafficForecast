import React, { useState } from "react";

function AddTagsModal({ incident, onClose, onAddTags }) {
  const [tags, setTags] = useState(incident.tags?.join(", ") || "");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Tags to Report</h3>
          <button onClick={onClose} className="close-btn">
            ×
          </button>
        </div>
        <div className="tags-form">
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
          <button
            onClick={() => onAddTags(tags.split(",").map((tag) => tag.trim()))}
            className="btn-primary"
          >
            Add Tags
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTagsModal;
