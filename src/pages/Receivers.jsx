import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Receivers() {
  const [requests, setRequests] = useState([]);
  const [assignedRequests, setAssignedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch initial data from your backend at http://localhost:5000
  useEffect(() => {
    fetch("http://localhost:5000/api/request")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleAssign = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId: id }),
      });

      if (response.ok) {
        // Find the item to move it to the "Active" list
        const matchedItem = requests.find((r) => (r.id === id || r._id === id));

        // Update UI: Remove from pending, add to assigned
        setRequests((prev) => prev.filter((r) => r.id !== id && r._id !== id));
        setAssignedRequests((prev) => [
          ...prev,
          { ...matchedItem, status: "Driver Assigned" },
        ]);
      }
    } catch (err) {
      alert("Backend connection failed.");
    }
  };

  if (loading) return <div style={page}>Loading...</div>;

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>Food Donation Panel</h2>

        {/* --- SECTION 1: NEW REQUESTS --- */}
        <h3 style={sectionHeader}>New Requests</h3>
        {requests.length === 0 && assignedRequests.length === 0 && (
          <p style={emptyText}>No requests yet.</p>
        )}
        
        {requests.map((r) => (
          <div key={r.id || r._id} style={row}>
            <div style={info}>
              <span style={nameText}>{r.name}</span>
              <span style={subText}>{r.food} • {r.people} members</span>
            </div>
            <button style={btnAssign} onClick={() => handleAssign(r.id || r._id)}>
              Assign
            </button>
          </div>
        ))}

        {/* --- SECTION 2: LIVE TRACKING --- */}
        {assignedRequests.length > 0 && (
          <>
            <h3 style={{ ...sectionHeader, marginTop: "30px" }}>Active Deliveries</h3>
            {assignedRequests.map((r) => (
              <div key={r.id || r._id} style={row}>
                <div style={info}>
                  <span style={nameText}>{r.name}</span>
                  <span style={{ ...subText, color: "#22c55e" }}>Status: {r.status}</span>
                </div>
                <button 
                  style={btnTrack} 
                  onClick={() => navigate("/track", { state: { receiver: r } })}
                >
                  Track Live
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// --- CSS-IN-JS STYLES ---
const page = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom right, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  padding: "20px"
};

const card = {
  background: "#1e293b",
  padding: "32px",
  borderRadius: "16px",
  width: "100%",
  maxWidth: "480px",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
};

const title = { textAlign: "center", marginBottom: "24px", fontSize: "1.5rem" };

const sectionHeader = {
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "#94a3b8",
  borderBottom: "1px solid #334155",
  paddingBottom: "8px",
  marginBottom: "12px"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0f172a",
  padding: "16px",
  borderRadius: "12px",
  marginBottom: "12px",
  border: "1px solid #334155"
};

const info = { display: "flex", flexDirection: "column", gap: "4px" };
const nameText = { fontWeight: "600", fontSize: "1rem" };
const subText = { fontSize: "0.85rem", color: "#94a3b8" };
const emptyText = { textAlign: "center", color: "#64748b", padding: "20px" };

const btnAssign = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.2s"
};

const btnTrack = {
  background: "#3b82f6",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600"
};