import { useState } from "react";

export default function Request() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [food, setFood] = useState("");
  const [people, setPeople] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!name || !address || !food || !people) {
      alert("Please fill all fields");
      return;
    }

    // Frontend-only fake success
    setSubmitted(true);
  };

  return (
    <div style={page}>
      <div style={card}>
        {!submitted ? (
          <>
            <h2 style={title}>Request Food</h2>

            <input
              style={input}
              placeholder="Your Name / Trust Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={input}
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              style={input}
              placeholder="Food item"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />

            <input
              style={input}
              placeholder="People count"
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />

            <button style={btn} onClick={submit}>
              Submit Request
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#22c55e" }}>Request Submitted!</h2>
            <p>Donors will be notified soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "#020617",
  padding: "40px",
  borderRadius: "12px",
  width: "360px",
  color: "white",
  boxShadow: "0 0 20px rgba(0,0,0,0.7)"
};

const title = {
  textAlign: "center",
  marginBottom: "20px"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "none"
};

const btn = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#22c55e",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};
