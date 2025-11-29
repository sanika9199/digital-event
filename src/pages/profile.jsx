import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import "./profile.css";
import profilePic from "../assets/profile.jpg";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="profile-page">

        <h1 className="profile-title">Profile</h1>

        <div className="profile-card">

          {/* PROFILE PHOTO */}
          <div className="profile-photo-section">
            <img src={profilePic} className="profile-photo" alt="Profile" />
            <span className="status-dot"></span>
          </div>

          {/* NAME + SMALL EDIT ICON */}
          <div className="name-row">
            <h2 className="user-name">Sarah Miller</h2>

            {/* SMALL EDIT ICON */}
            <span 
              className="edit-icon"
              onClick={() => setIsEditing(!isEditing)}
              title="Edit Profile"
            >
              ✏️
            </span>
          </div>

          <p className="user-info">✉️ sarah.miller@university.edu</p>
          <p className="user-info">📅 Events Attended: <strong>25</strong></p>

          {/* EDIT FORM */}
          {isEditing && (
            <div className="edit-section">
              <label>Name</label>
              <input type="text" defaultValue="Sarah Miller" />

              <label>Email</label>
              <input type="email" defaultValue="sarah.miller@university.edu" />

              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" />

              <button className="save-btn">Save</button>
            </div>
          )}

          <button className="logout-btn">Logout</button>

        </div>
      </div>
    </>
  );
}
