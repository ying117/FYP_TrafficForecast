import React, { useState } from "react";
import IncidentCard from "./IncidentCard";
import AIAnalysisModal from "./AIAnalysisModal";
import ApproveModal from "./ApproveModal";
import RejectModal from "./RejectModal";
import AddTagsModal from "./AddTagsModal";

function IncidentsTab({ incidents }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [showAI, setShowAI] = useState(false);
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const handleAIAnalysis = (incident) => {
    setSelectedIncident(incident);
    setShowAI(true);
  };

  const handleApprove = (incident) => {
    setSelectedIncident(incident);
    setShowApprove(true);
  };

  const handleReject = (incident) => {
    setSelectedIncident(incident);
    setShowReject(true);
  };

  const handleAddTags = (incident) => {
    setSelectedIncident(incident);
    setShowTags(true);
  };

  return (
    <div className="incidents-tab">
      <div className="filters">
        <input
          type="text"
          placeholder="Search incidents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="incidents-list">
        {incidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            onAIAnalysis={handleAIAnalysis}
            onApprove={handleApprove}
            onReject={handleReject}
            onAddTags={handleAddTags}
          />
        ))}
      </div>

      {/* AI Analysis Modal */}
      {showAI && (
        <AIAnalysisModal
          incident={selectedIncident}
          onClose={() => setShowAI(false)}
        />
      )}

      {/* Approve Modal */}
      {showApprove && (
        <ApproveModal
          incident={selectedIncident}
          onClose={() => setShowApprove(false)}
          onApprove={() => {
            console.log("Approved incident:", selectedIncident.id);
            setShowApprove(false);
          }}
        />
      )}

      {/* Reject Modal */}
      {showReject && (
        <RejectModal
          incident={selectedIncident}
          onClose={() => setShowReject(false)}
          onReject={(reason) => {
            console.log(
              "Rejected incident:",
              selectedIncident.id,
              "Reason:",
              reason
            );
            setShowReject(false);
          }}
        />
      )}

      {/* Add Tags Modal */}
      {showTags && (
        <AddTagsModal
          incident={selectedIncident}
          onClose={() => setShowTags(false)}
          onAddTags={(tags) => {
            console.log(
              "Added tags to incident:",
              selectedIncident.id,
              "Tags:",
              tags
            );
            setShowTags(false);
          }}
        />
      )}
    </div>
  );
}

export default IncidentsTab;
