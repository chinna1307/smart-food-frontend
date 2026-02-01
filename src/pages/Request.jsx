import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function Request() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    food: "",
    people: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const { name, address, food, people } = formData;
    
    if (!name || !address || !food || !people) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      alert("Error: Backend is not responding.");
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        {!submitted ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Request Food</h2>
            <input name="name" style={input} placeholder="Organization/Name" onChange={handleChange} />
            <input name="address" style={input} placeholder="Address" onChange={handleChange} />
            <input name="food" style={input} placeholder="Food Item" onChange={handleChange} />
            <input name="people" type="number" style={input} placeholder="People Count" onChange={handleChange} />
            <button style={btn} onClick={submit}>Submit Request</button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#22c55e", marginBottom: "10px" }}>Success!</h2>
            <p style={{ marginBottom: "20px" }}>
              Your request has been sent to donors.<br />
              They will Contact you
            </p>
            
            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button style={btn} onClick={() => setSubmitted(false)}>
                New Request
              </button>
              
              {/* Added Home Button */}
              <button 
                style={{ ...btn, background: "#3b82f6" }} 
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Shared Styles
const page = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif"
};

const card = {
  background: "#1e293b",
  padding: "40px",
  borderRadius: "12px",
  width: "360px",
  color: "white",
  boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
  boxSizing: "border-box"
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#22c55e",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s"
};