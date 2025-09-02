import React from "react";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <main className="profile-main-content">
      <div className="profile-breadcrumb">
        Dashboard &gt; <span>Profile</span>
      </div>
      <h1 className="profile-title">Administrator Profile</h1>
      <p className="profile-subtitle">Manage your account information and preferences</p>
      <section className="profile-card">
        <div className="profile-avatar-section">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="profile-avatar"
          />
          <div>
            <h2 className="profile-name">Hizrian Ahmed</h2>
            <div className="profile-role">City Administrator</div>
            <div className="profile-dept">Public Works Department</div>
          </div>
        </div>
        <button className="profile-edit-btn">Edit Profile</button>
      </section>
      <section className="profile-info-row">
        <div className="profile-info-card">
          <h3>
            <span className="profile-info-icon">🧑‍💼</span> Personal Information
          </h3>
          <div className="profile-info-list">
            <div>
              <span className="profile-info-label">Full Name</span>
              <span className="profile-info-value">Hizrian Ahmed</span>
            </div>
            <div>
              <span className="profile-info-label">Email Address</span>
              <span className="profile-info-value">hizrian.ahmed@cityworks.gov</span>
            </div>
            <div>
              <span className="profile-info-label">Phone Number</span>
              <span className="profile-info-value">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="profile-info-card">
          <h3>
            <span className="profile-info-icon">⚙️</span> Account Settings
          </h3>
          <div className="profile-settings-list">
            <div className="profile-setting-row">
              <span>Change Password</span>
              <span className="profile-setting-arrow">&gt;</span>
            </div>
            <div className="profile-setting-row">
              <span>Email Notifications</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="profile-setting-row">
              <span>Push Notifications</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}