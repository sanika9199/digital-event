import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}
      <h2 className="sidebar-logo">digiEvent</h2>

      {/* Main Menu */}
      <div className="sidebar-section">
        <NavLink to="/" className="menu-item">
          Home
        </NavLink>

        <NavLink to="/explore" className="menu-item">
          Explore Events
        </NavLink>

        <NavLink to="/notifications" className="menu-item">
          Notifications
        </NavLink>

        <NavLink to="/certificates" className="menu-item">
          Certificates
        </NavLink>
      </div>

      {/* Section Title */}
      <h3 className="sidebar-subtitle">EVENT TOOLS</h3>

      {/* Tools Menu */}
      <div className="sidebar-section">
        <NavLink to="/highlights" className="menu-item">
          Highlights
        </NavLink>

        <NavLink to="/feedback" className="menu-item">
          Feedback
        </NavLink>

        <NavLink to="/profile" className="menu-item">
          Profile
        </NavLink>
      </div>

    </div>
  );
}
