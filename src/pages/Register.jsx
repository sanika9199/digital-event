import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import "./register.css";

export default function Register() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="register-page">

        <div className="register-box">

          <h2 className="reg-title">Event Registration</h2>

          {/* Full Name */}
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          {/* Email */}
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          {/* Phone */}
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your mobile number" />

          {/* College */}
          <label>College / University</label>
          <input type="text" placeholder="Enter your college name" />

          {/* Department */}
          <label>Department</label>
          <select>
            <option>Select Department</option>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Management</option>
          </select>

          {/* Year */}
          <label>Year of Study</label>
          <select>
            <option>Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>Final Year</option>
          </select>

          {/* Gender */}
          <label>Gender</label>
          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Payment */}
          <label>Payment Method</label>
          <select>
            <option>Select Payment Method</option>
            <option>UPI (Google Pay / PhonePe / Paytm)</option>
            <option>Debit / Credit Card</option>
            <option>Net Banking</option>
            <option>Cash at Venue</option>
          </select>

          {/* Button */}
          <button className="reg-btn">Proceed to Payment</button>

        </div>

      </div>
    </>
  );
}
