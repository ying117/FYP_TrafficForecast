import React, { useState } from "react";
import ApproveAppealModal from "./ApproveAppealModal";
import RejectAppealModal from "./RejectAppealModal";

function AppealsTab() {
  const appeals = [
    {
      id: 1,
      type: "Ban Appeal",
      from: "driver87",
      submitted: "Sep 10, 2025 9:07 PM",
      message:
        "I believe my ban was unfair. I was reporting genuine incidents near my workplace. Please reconsider.",
      status: "pending",
    },
    {
      id: 2,
      type: "Incident Rejection Appeal",
      from: "driver127",
      submitted: "Sep 9, 2025 8:15 PM",
      message:
        "My incident report was rejected but I have photographic evidence.",
      status: "pending",
    },
    {
      id: 3,
      type: "Incident Rejection Appeal",
      from: "driver17",
      submitted: "Sep 8, 2025 8:25 PM",
      message:
        "My incident report for the roadworks was removed although the construction is still ongoing.",
      status: "resolved",
      response:
        "Report has been restored after verification with city authorities.",
      respondedBy: "admin123",
    },
  ];

  const [selectedAppeal, setSelectedAppeal] = useState(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleApprove = (appeal) => {
    setSelectedAppeal(appeal);
    setShowApproveModal(true);
  };

  const handleReject = (appeal) => {
    setSelectedAppeal(appeal);
    setShowRejectModal(true);
  };

  return (
    <div className="appeals-tab">
      <div className="appeals-list">
        {appeals.map((appeal) => (
          <div key={appeal.id} className="appeal-card">
            <div className="appeal-header">
              <h4>{appeal.type}</h4>
              <span className="appeal-date">{appeal.submitted}</span>
            </div>
            <div className="appeal-meta">
              <strong>From: {appeal.from}</strong>
            </div>
            <p className="appeal-message">{appeal.message}</p>

            {appeal.status === "resolved" && (
              <div className="appeal-response">
                <div className="response-header">
                  <strong>Admin Response by {appeal.respondedBy}</strong>
                </div>
                <p>{appeal.response}</p>
              </div>
            )}

            {appeal.status === "pending" && (
              <div className="appeal-actions">
                <button
                  onClick={() => handleApprove(appeal)}
                  className="btn-success"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(appeal)}
                  className="btn-danger"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Approve Appeal Modal */}
      {showApproveModal && (
        <ApproveAppealModal
          appeal={selectedAppeal}
          onClose={() => setShowApproveModal(false)}
          onApprove={(response) => {
            console.log(
              "Approved appeal:",
              selectedAppeal.id,
              "Response:",
              response
            );
            setShowApproveModal(false);
          }}
        />
      )}

      {/* Reject Appeal Modal */}
      {showRejectModal && (
        <RejectAppealModal
          appeal={selectedAppeal}
          onClose={() => setShowRejectModal(false)}
          onReject={(reason) => {
            console.log(
              "Rejected appeal:",
              selectedAppeal.id,
              "Reason:",
              reason
            );
            setShowRejectModal(false);
          }}
        />
      )}
    </div>
  );
}

export default AppealsTab;
