import { useState } from "react";
import profilePic from "../assets/profile.jpg";

export default function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (onSearch) {
      onSearch(value);  // send search to Explore.jsx
    }
  };

  const styles = {
    navbar: {
      width: "100%",
      height: "70px",
      backgroundColor: "#0066ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 25px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },

    logoBox: {
      display: "flex",
      alignItems: "center",
      fontSize: "22px",
      color: "white",
      fontWeight: "700",
    },

    searchContainer: {
      position: "relative",
      width: "400px",
    },

    searchInput: {
      width: "100%",
      height: "42px",
      borderRadius: "12px",
      background: "#ffffff",
      border: "1px solid #c9d6ff",
      outline: "none",
      paddingLeft: "45px",
      paddingRight: "15px",
      fontSize: "15px",
      color: "#333",
      transition: "0.25s",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },

    searchInputFocus: {
      border: "1px solid #004eea",
      boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    },

    searchIcon: {
      position: "absolute",
      top: "50%",
      left: "15px",
      transform: "translateY(-50%)",
      opacity: 0.6,
    },

    profileImg: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid white",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.navbar}>

      {/* LOGO */}
      <div style={styles.logoBox}>digiEvent</div>

      {/* MODERN SEARCH BAR */}
      <div style={styles.searchContainer}>
        <svg
          style={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#555"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          type="text"
          placeholder="Search events, categories, venues..."
          value={searchText}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      {/* PROFILE */}
      <img src={profilePic} alt="profile" style={styles.profileImg} />
    </div>
  );
}
