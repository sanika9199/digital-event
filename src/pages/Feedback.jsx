import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import "./feedback.css";

export default function Feedback() {
  const [rating, setRating] = useState(0);        // selected rating
  const [hover, setHover] = useState(0);          // hover effect
  const [comment, setComment] = useState("");     // feedback text

  const handleSubmit = () => {
    if (!rating || comment.trim() === "") {
      alert("Please provide rating and feedback!");
      return;
    }

    alert(
      "Thank you!\nRating: " + rating + " Stars\nComments: " + comment
    );

    // Later you can send to backend or firebase
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="feedback-page">
        <h1 className="feedback-title">Provide Feedback</h1>

        <div className="feedback-box">

          <label className="label-title">Rate your experience:</label>

          {/* ⭐ CLICKABLE STARS ⭐ */}
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  (hover || rating) >= star ? "star active" : "star"
                }
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>

          <label className="label-title">Your comments:</label>

          <textarea
            className="feedback-input"
            placeholder="Share your thoughts about your recent event or platform experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Feedback
          </button>
        </div>
      </div>
    </>
  );
}
