import "./explore.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Explore() {
  const navigate = useNavigate();

  const events = [
    {
      img: "/event1.jpg",
      title: "Annual Tech Conference 2024",
      category: "Technology",
      date: "2024-10-20",
      time: "09:00 AM - 05:00 PM",
      location: "Online Webinar",
    },
    {
      img: "/event2.jpg",
      title: "Web Development Workshop: React & Next.js",
      category: "Education",
      date: "2024-11-15",
      time: "01:00 PM - 04:00 PM",
      location: "Campus Room 301",
    },
    {
      img: "/event3.jpg",
      title: "Student Leadership Summit",
      category: "Business",
      date: "2024-12-07",
      time: "10:00 AM - 03:00 PM",
      location: "University Auditorium",
    },
    {
      img: "/event4.jpg",
      title: "AI in Education: Future Trends",
      category: "Technology",
      date: "2025-01-10",
      time: "02:30 PM - 05:40 PM",
      location: "Online Symposium",
    },
    {
      img: "/event.jpg",
      title: "Career Fair & Networking Event",
      category: "Business",
      date: "2025-02-22",
      time: "09:30 AM - 04:00 PM",
      location: "Sports Complex Hall",
    },
    {
      img: "/event6.jpg",
      title: "Sustainable Living Workshop",
      category: "Education",
      date: "2025-03-08",
      time: "11:00 AM - 01:00 PM",
      location: "Greenhouse Labs",
    },
  ];

  // -----------------------------
  // STATES
  // -----------------------------
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");

  // Convert date string to date object
  const toDate = (value) => new Date(value);

  // -----------------------------
  // FILTERING LOGIC
  // -----------------------------
  const filteredEvents = events.filter((event) => {
    const searchMatch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = category === "All" || event.category === category;

    const today = new Date();
    const eventDate = toDate(event.date);
    let dateMatch = true;

    if (dateFilter === "Today") {
      dateMatch = eventDate.toDateString() === today.toDateString();
    } else if (dateFilter === "This Week") {
      const weekAhead = new Date();
      weekAhead.setDate(today.getDate() + 7);
      dateMatch = eventDate >= today && eventDate <= weekAhead;
    } else if (dateFilter === "This Month") {
      dateMatch =
        eventDate.getMonth() === today.getMonth() &&
        eventDate.getFullYear() === today.getFullYear();
    }

    return searchMatch && categoryMatch && dateMatch;
  });

  return (
    <>
      <Sidebar />
      <Navbar onSearch={setSearch} />

      <div className="explore-container">
        <h2 className="explore-title">Explore Events</h2>

        {/* FILTER BAR */}
        <div className="filter-row">

          {/* SEARCH */}
          <div className="search-wrapper">
            <svg width="18" height="18" className="search-svg" stroke="#555" strokeWidth="2" fill="none"
              viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16" y1="16" x2="22" y2="22"></line>
            </svg>

            <input
              type="text"
              placeholder="Search by title or venue..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* CATEGORY */}
          <select
            className="filter-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>

          {/* DATE */}
          <select
            className="filter-select"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="All">All Dates</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>

        {/* EVENT CARDS */}
        <div className="explore-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, i) => (
              <div className="event-card" key={i}>
                <img src={event.img} className="event-img" />

                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>

                  <div className="event-row">
                    <span>{event.date}</span>
                  </div>

                  <div className="event-row">
                    <span>{event.time}</span>
                  </div>

                  <div className="event-row">
                    <span>{event.location}</span>
                  </div>

                  <button
                    className="event-btn"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </>
  );
}
