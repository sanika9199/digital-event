import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";

import "./highlight.css";

export default function Highlights() {
  const highlights = [
    { img: "/event1.jpg", title: "Opening Ceremony" },
    { img: "/event2.jpg", title: "Keynote Speaker Presentation" },
    { img: "/event3.jpg", title: "Interactive Workshop Session" },
    { img: "/event4.jpg", title: "Award Ceremony Celebrations" },
    { img: "/event.jpg", title: "Closing Remarks & Farewell" },
    { img: "/event6.jpg", title: "Networking and Connections" },
  ];

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="highlight-page">
        <h1 className="highlight-title">Event Highlights</h1>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <img
                src={item.img}
                alt="event"
                className="highlight-img"
              />
              <div className="highlight-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
