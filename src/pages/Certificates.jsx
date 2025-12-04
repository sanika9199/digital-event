import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./certificates.css";

export default function Certificates() {
  const certificates = [
    {
      title: "Digital Marketing Masterclass",
      date: "October 12, 2023",
    },
    {
      title: "Data Science Fundamentals Workshop",
      date: "September 05, 2023",
    },
    {
      title: "Web Development Bootcamp",
      date: "August 20, 2023",
    },
    {
      title: "UI/UX Design Principles Seminar",
      date: "July 15, 2023",
    },
    {
      title: "Cloud Computing Essentials",
      date: "June 01, 2023",
    },
  ];

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="cert-page">
        <h1 className="cert-title">Certificates</h1>

        <div className="cert-list">
          {certificates.map((item, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-left">
                <i className="fas fa-certificate cert-icon"></i>

                <div>
                  <h2 className="cert-name">{item.title}</h2>
                  <p className="cert-date">{item.date}</p>
                </div>
              </div>

              <button className="cert-btn">Download PDF</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
