import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={page}>
      <h1 style={title}>Smart Food Donation Network</h1>

      <p style={subtitle}>
        Donate excess food. Help people. Reduce waste.
      </p>

      <div style={btnWrap}>
        <Link to="/donate" style={{ textDecoration: "none" }}>
          <button style={donateBtn}>Donate</button>
        </Link>

        <Link to="/request" style={{ textDecoration: "none" }}>
          <button style={requestBtn}>Request</button>
        </Link>
      </div>
    </div>
  )
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "linear-gradient(to right, #0f172a, #020617)",
  color: "white"
}

const title = {
  fontSize: "56px",
  marginBottom: "10px"
}

const subtitle = {
  fontSize: "18px",
  marginBottom: "30px",
  opacity: 0.9
}

const btnWrap = {
  display: "flex",
  gap: "20px"
}

const donateBtn = {
  padding: "12px 28px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#22c55e",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
}

const requestBtn = {
  padding: "12px 28px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#2563eb",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
}
