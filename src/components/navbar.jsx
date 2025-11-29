export default function Navbar() {
  return (
    <div style={styles.navbar}>

      {/* LEFT LOGO */}
      <div style={styles.logoBox}>
        <span style={styles.logoBold}>digi</span>
        <span style={styles.logoThin}>Event</span>
      </div>

      {/* CENTER SEARCH BAR */}
      <div style={styles.searchContainer}>
        {/* Small search icon inside input */}
        <svg
          style={styles.searchInsideIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
          placeholder="Search events..."
          style={styles.searchInput}
        />
      </div>

      {/* RIGHT → PROFILE IMAGE ONLY */}
      <img
        src="/profile.jpg"
        alt="profile"
        style={styles.profileImg}
      />

    </div>
  );
}


/* INLINE CSS */
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
  },

  /* LOGO */
  logoBox: {
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    color: "white",
  },

  logoBold: {
    fontWeight: "700",
  },

  logoThin: {
    fontWeight: "400",
    marginLeft: "3px",
  },

  /* SEARCH BAR */
  searchContainer: {
    position: "relative",
    width: "350px",
  },

  searchInsideIcon: {
    position: "absolute",
    top: "50%",
    left: "12px",
    transform: "translateY(-50%)",
  },

  searchInput: {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    background: "white",
    border: "none",
    outline: "none",
    paddingLeft: "40px",
    fontSize: "14px",
    color: "#333",
  },

  /* PROFILE IMAGE */
  profileImg: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
    cursor: "pointer",
  },
};
