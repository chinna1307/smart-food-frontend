import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Receivers() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  if (!state) {
    return (
      <div style={page}>
        <h2>No donation data found.</h2>
        <button style={btn} onClick={() => navigate("/donate")}>Go Back</button>
      </div>
    )
  }

  const receivers = [
    { id: 1, name: "Orphanage Home", email: "orphanage@mail.com", people: 25 },
    { id: 2, name: "Old Age Shelter", email: "oldage@mail.com", people: 40 },
    { id: 3, name: "Street Children Group", email: "street@mail.com", people: 30 }
  ]

  function confirmAssign() {
    console.log("📧 Email sent to:", selected.email)
    setDone(true)
  }

  return (
    <div style={page}>
      <div style={card}>

        {!done ? (
          <>
            <h2>Donation Details</h2>
            <p><b>From:</b> {state.name}</p>
            <p><b>Item:</b> {state.item}</p>
            <p><b>Quantity:</b> {state.qty}</p>
            <p><b>Address:</b> {state.address}</p>

            <h3 style={{ marginTop: 20 }}>Select Receiver</h3>

            {receivers.map(r => (
              <div key={r.id} style={row}>
                <span>{r.name} ({r.people} people)</span>
                <button style={btnSmall} onClick={() => setSelected(r)}>
                  Assign
                </button>
              </div>
            ))}

            {selected && (
              <div style={confirmBox}>
                <p><b>Assign to:</b> {selected.name}</p>

                <div style={{ display: "flex", gap: 10 }}>
                  <button style={btnGreen} onClick={confirmAssign}>
                    Confirm
                  </button>
                  <button style={btnRed} onClick={() => setSelected(null)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 style={{ color: "#22c55e" }}>✅ Successfully Completed</h2>
            <p>Food assigned & receiver alerted by email.</p>

            <button style={btn} onClick={() => navigate("/")}>
              Go Home
            </button>
          </>
        )}
      </div>
    </div>
  )
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(to right,#0f172a,#020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
}

const card = {
  background: "#020617",
  padding: "30px",
  borderRadius: "10px",
  width: "420px",
  boxShadow: "0 0 20px rgba(0,0,0,.7)"
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px"
}

const confirmBox = {
  marginTop: "20px",
  padding: "15px",
  background: "#1e293b",
  borderRadius: "8px"
}

const btn = {
  padding: "10px",
  background: "#2563eb",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
  marginTop: "20px"
}

const btnSmall = {
  background: "#22c55e",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer"
}

const btnGreen = {
  background: "#22c55e",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  color: "black",
  fontWeight: "bold"
}

const btnRed = {
  background: "#ef4444",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold"
}
