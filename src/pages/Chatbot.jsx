import { useState } from "react";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <div
        onClick={() => setOpen(!open)}
        style={styles.floatingBtn}
      >
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div style={styles.chatWindow}>
          <h3 style={styles.header}>Chatbot</h3>

          <div style={styles.chatBody}>
            <p>Hello! How can I assist you today?</p>
          </div>

          <div style={styles.inputBox}>
            <input style={styles.input} placeholder="Type message..." />
            <button style={styles.sendBtn}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  floatingBtn: {
    position: "fixed",
    bottom: "80px",
    right: "25px",
    width: "55px",
    height: "55px",
    backgroundColor: "#0066FF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 999,
  },

  chatWindow: {
    position: "fixed",
    bottom: "140px",
    right: "25px",
    width: "300px",
    height: "380px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 999,
  },

  header: {
    margin: 0,
    padding: "12px",
    background: "#0066FF",
    color: "white",
    fontSize: "16px",
  },

  chatBody: {
    flex: 1,
    padding: "12px",
    fontSize: "14px",
    overflowY: "auto",
  },

  inputBox: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #eee",
  },

  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },

  sendBtn: {
    marginLeft: "8px",
    padding: "8px 14px",
    background: "#0066FF",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
