import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./highlight.css";

export default function Highlights() {

  const [highlights, setHighlights] = useState([
    { type: "image", src: "/event1.jpg", title: "Opening Ceremony" },
    { type: "image", src: "/event2.jpg", title: "Keynote Speaker Presentation" },
    { type: "image", src: "/event3.jpg", title: "Interactive Workshop Session" },
    { type: "image", src: "/event4.jpg", title: "Award Ceremony Celebrations" },
    { type: "image", src: "/event.jpg", title: "Closing Remarks & Farewell" },
    { type: "image", src: "/event6.jpg", title: "Networking and Connections" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newFile, setNewFile] = useState(null);

  const addHighlight = () => {
    if (!newTitle || !newFile) return;

    const fileURL = URL.createObjectURL(newFile);
    const fileType = newFile.type.startsWith("video") ? "video" : "image";

    setHighlights([...highlights, { type: fileType, src: fileURL, title: newTitle }]);

    setShowModal(false);
    setNewTitle("");
    setNewFile(null);
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="highlight-page">

        <div className="highlight-header-row">
          <h1 className="highlight-title">Event Highlights</h1>

          <button
            className="add-highlight-btn"
            onClick={() => setShowModal(true)}
          >
            Add Highlight
          </button>
        </div>

        <div className="highlight-grid">
          {highlights.map((item, i) => (
            <div className="highlight-card" key={i}>
              
              {item.type === "image" ? (
                <img src={item.src} className="highlight-img" />
              ) : (
                <video className="highlight-img" controls>
                  <source src={item.src} />
                </video>
              )}

              <div className="highlight-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WORKING MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Add Highlight</h2>

            <input
              type="text"
              placeholder="Enter Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setNewFile(e.target.files[0])}
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={addHighlight}>Save</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
