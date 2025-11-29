import "./home.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="home-page">

        {/* TOP TITLE */}
        <h2 className="welcome">Welcome, Swara!</h2>
        <p className="overview-title">Your Dashboard Overview</p>

        {/* ================= STATS CARDS ================= */}
        <div className="stats-grid">

          {/* Attended Events */}
          <div className="stat-card">
            {/* Graduation Cap SVG */}
            <svg width="30" height="30" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 10L12 4 2 10l10 6 10-6z"></path>
              <path d="M6 12v6l6 3 6-3v-6"></path>
            </svg>
            <p className="stat-label">Attended Events</p>
            <h3 className="stat-value">15</h3>
          </div>

          {/* Certificates */}
          <div className="stat-card">
            {/* Certificate SVG */}
            <svg width="30" height="30" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M6 14v7l6-3 6 3v-7"></path>
            </svg>
            <p className="stat-label">Certificates Downloaded</p>
            <h3 className="stat-value">12</h3>
          </div>

          {/* Rating */}
          <div className="stat-card">
            {/* Star SVG */}
            <svg width="30" height="30" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path>
            </svg>
            <p className="stat-label">Average Rating</p>
            <h3 className="stat-value">4.5</h3>
          </div>

        </div>

        {/* ================= RECENT ACTIVITY ================= */}
        <h3 className="section-title">Recent Activity</h3>

        <div className="activity-box">

          <div className="activity-row">
            {/* Calendar Icon */}
            <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
            </svg>
            <span className="activity-text">
              You registered for <b>"Generative AI in Event Management"</b>.
            </span>
            <span className="activity-time">Just now</span>
          </div>

          <div className="activity-row">
            {/* Download Icon */}
            <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v12"></path>
              <path d="M6 9l6 6 6-6"></path>
              <path d="M5 19h14"></path>
            </svg>
            <span className="activity-text">
              Downloaded certificate for <b>"Web Development Conference 2023"</b>.
            </span>
            <span className="activity-time">2 hours ago</span>
          </div>

          <div className="activity-row">
            {/* Message Icon */}
            <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 11c0 4-4 8-9 8a9.77 9.77 0 0 1-4-.8L3 20l1.8-3.6A8 8 0 1 1 21 11z"></path>
            </svg>
            <span className="activity-text">
              Submitted feedback for <b>"Digital Marketing Summit"</b>.
            </span>
            <span className="activity-time">Yesterday</span>
          </div>

          <div className="activity-row">
            {/* Check Icon */}
            <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <span className="activity-text">
              Your <b>"Event Planning Workshop"</b> registration was confirmed.
            </span>
            <span className="activity-time">3 days ago</span>
          </div>

        </div>

        {/* ================= UPCOMING EVENTS ================= */}
        <h3 className="section-title">Upcoming Events</h3>

        <div className="events-grid">

          <div className="event-card">
            <img src="/event1.jpg" className="event-img" />
            <div className="event-content">
              <h4 className="event-title">Innovation & Tech Expo 2024</h4>
              <p className="event-date">November 15, 2024 • 9:00 AM</p>
              <p className="event-location">Virtual • Online Platform</p>
              <button className="event-btn">View Details</button>
            </div>
          </div>

          <div className="event-card">
            <img src="/event2.jpg" className="event-img" />
            <div className="event-content">
              <h4 className="event-title">Career Opportunities in Digital Media</h4>
              <p className="event-date">December 5, 2024 • 2:00 PM</p>
              <p className="event-location">University Auditorium</p>
              <button className="event-btn">View Details</button>
            </div>
          </div>

          <div className="event-card">
            <img src="/event3.jpg" className="event-img" />
            <div className="event-content">
              <h4 className="event-title">Sustainability in Practice Forum</h4>
              <p className="event-date">January 20, 2025 • 10:00 AM</p>
              <p className="event-location">Conference Hall A</p>
              <button className="event-btn">View Details</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
