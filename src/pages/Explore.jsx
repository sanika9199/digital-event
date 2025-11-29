import "./explore.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  const events = [
    {
      img: "/event1.jpg",
      title: "Annual Tech Conference 2024",
      date: "October 20, 2024",
      time: "09:00 AM - 05:00 PM",
      location: "Online Webinar",
    },
    {
      img: "/event2.jpg",
      title: "Web Development Workshop: React & Next.js",
      date: "November 15, 2024",
      time: "01:00 PM - 04:00 PM",
      location: "Campus Room 301",
    },
    {
      img: "/event3.jpg",
      title: "Student Leadership Summit",
      date: "December 07, 2024",
      time: "10:00 AM - 03:00 PM",
      location: "University Auditorium",
    },
    {
      img: "/event4.jpg",
      title: "AI in Education: Future Trends",
      date: "January 10, 2025",
      time: "02:30 PM - 05:40 PM",
      location: "Online Symposium",
    },
    {
      img: "/event.jpg",
      title: "Career Fair & Networking Event",
      date: "February 22, 2025",
      time: "09:30 AM - 04:00 PM",
      location: "Sports Complex Hall",
    },
    {
      img: "/event6.jpg",
      title: "Sustainable Living Workshop",
      date: "March 08, 2025",
      time: "11:00 AM - 01:00 PM",
      location: "Greenhouse Labs",
    },
  ];

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="explore-container">
        <h2 className="explore-title">Explore Events</h2>

        {/* FILTER BAR */}
        <div className="filter-row">

          {/* SEARCH FIELD */}
          <div className="search-wrapper">
            <svg width="18" height="18" className="search-svg" stroke="#555" strokeWidth="2" fill="none"
              viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16" y1="16" x2="22" y2="22"></line>
            </svg>
            <input type="text" placeholder="Search by title or venue..." />
          </div>

          {/* CATEGORY DROPDOWN */}
          <select className="filter-select">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Business</option>
            <option>Education</option>
          </select>

          {/* DATE DROPDOWN */}
          <select className="filter-select">
            <option>All Dates</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

        </div>

        {/* EVENT GRID */}
        <div className="explore-grid">
          {events.map((event, i) => (
            <div className="event-card" key={i}>

              <img src={event.img} alt="event" className="event-img" />

              <div className="event-info">

                <h3 className="event-title">{event.title}</h3>

                {/* DATE */}
                <div className="event-row">
                  <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                  </svg>
                  <span>{event.date}</span>
                </div>

                {/* TIME */}
                <div className="event-row">
                  <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{event.time}</span>
                </div>

                {/* LOCATION */}
                <div className="event-row">
                  <svg width="18" height="18" fill="none" stroke="#1a73e8" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                  </svg>
                  <span>{event.location}</span>
                </div>

                {/* REGISTER BUTTON */}
                <button className="event-btn" onClick={() => navigate("/register")}>
                  Register
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}
