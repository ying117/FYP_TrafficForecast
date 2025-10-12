import React, { useState } from "react";
import BanModal from "./BanModal";
import UnbanModal from "./UnbanModal";
import DeleteUserModal from "./DeleteUserModal";

function UsersTab({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showBanModal, setShowBanModal] = useState(false);
  const [showUnbanModal, setShowUnbanModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleBan = (user) => {
    setSelectedUser(user);
    setShowBanModal(true);
  };

  const handleUnban = (user) => {
    setSelectedUser(user);
    setShowUnbanModal(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  return (
    <div className="users-tab">
      <div className="filters">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="banned">Banned</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Status</th>
              <th>Role</th>
              <th>Last Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-info">
                    <div className="username">{user.username}</div>
                    <div className="email">{user.email}</div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.role}</td>
                <td>{user.lastActive}</td>
                <td>
                  <div className="user-actions">
                    <button className="btn-outline">View Activity</button>
                    {user.status === "Banned" ? (
                      <button
                        onClick={() => handleUnban(user)}
                        className="btn-success"
                      >
                        Unban User
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBan(user)}
                        className="btn-warning"
                      >
                        Ban User
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn-danger"
                    >
                      Delete User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-footer">
          <span>Showing 1-5 of 670 users</span>
          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>134</button>
          </div>
        </div>
      </div>

      {/* Ban Modal */}
      {showBanModal && (
        <BanModal
          user={selectedUser}
          onClose={() => setShowBanModal(false)}
          onBan={(reason, description) => {
            console.log(
              "Banned user:",
              selectedUser.id,
              "Reason:",
              reason,
              "Description:",
              description
            );
            setShowBanModal(false);
          }}
        />
      )}

      {/* Unban Modal */}
      {showUnbanModal && (
        <UnbanModal
          user={selectedUser}
          onClose={() => setShowUnbanModal(false)}
          onUnban={(reason) => {
            console.log("Unbanned user:", selectedUser.id, "Reason:", reason);
            setShowUnbanModal(false);
          }}
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setShowDeleteModal(false)}
          onDelete={(reason) => {
            console.log("Deleted user:", selectedUser.id, "Reason:", reason);
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
}

export default UsersTab;

