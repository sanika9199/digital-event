import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./notification.css";

export default function Notifications() {
  const notifications = [
    {
      text: `Your registration for 'Tech Conference 2024' is confirmed. Explore event details now!`,
      time: "2 hours ago",
      new: true,
    },
    {
      text: `Reminder: 'Web Development Workshop' starts tomorrow at 1:00 PM. Don't miss out!`,
      time: "1 day ago",
      new: true,
    },
    {
      text: `Your certificate for 'Student Leadership Summit' is now available for download.`,
      time: "3 days ago",
      new: false,
    },
    {
      text: `New event added: 'AI in Education Forum' on January 10th. Check it out!`,
      time: "5 days ago",
      new: false,
    },
    {
      text: `Don't forget to submit feedback for the 'Career Fair 2023'. Your opinion matters!`,
      time: "1 week ago",
      new: true,
    },
    {
      text: `Welcome to the Student Dashboard! We're excited to have you.`,
      time: "2 weeks ago",
      new: false,
    },
  ];

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="notify-page">
        <h1 className="notify-title">Notifications</h1>

        <div className="notify-list">
          {notifications.map((n, index) => (
            <div className="notify-card" key={index}>
              <p className="notify-text">{n.text}</p>

              <div className="notify-right">
                <span className="notify-time">{n.time}</span>

                {n.new && <span className="notify-badge">New</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
