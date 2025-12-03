import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import "./profile.css";

export default function Profile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    photo: ""
  });

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if(file){
      setProfile({...profile, photo: URL.createObjectURL(file)});
    }
  };

  const handleRemove = () => {
    setProfile({...profile, photo: ""});
  };

  const handleSave = () => {
    alert("Profile Saved Successfully ✅");
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="profile-page">

        <h1 className="profile-title">My Profile</h1>

        <div className="profile-container">

          {/* LEFT PHOTO SECTION */}
          <div className="photo-box">
            
            <div className="avatar-circle">
              {profile.photo 
                ? <img src={profile.photo} alt="Profile" />
                : "U"}
            </div>

            <label className="upload-btn">
              Upload New Photo
              <input type="file" hidden onChange={handleUpload} />
            </label>

            <button className="remove-btn" onClick={handleRemove}>
              Remove
            </button>

          </div>


          {/* RIGHT FORM SECTION */}
          <div className="form-box">

            <label>Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Your name"
              value={profile.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="you@example.com"
              value={profile.email}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input 
              type="text"
              name="phone"
              placeholder="+91 9876543210"
              value={profile.phone}
              onChange={handleChange}
            />

            <button className="save-profile-btn" onClick={handleSave}>
              Save Profile Picture & Details
            </button>

          </div>

        </div>
      </div>
    </>
  );
}
