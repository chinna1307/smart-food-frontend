import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Donate() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [item, setItem] = useState("")
  const [qty, setQty] = useState("")
  const [address, setAddress] = useState("")

  function submit() {
    if (!name || !item || !qty || !address) {
      alert("Please fill all fields")
      return
    }

    navigate("/receivers", {
      state: { name, item, qty, address }
    })
  }

  return (
    <div style={page}>
      <div style={card}>
        <h2>Donate Food</h2>

        <input placeholder="Your Name / Trust Name" value={name} onChange={e => setName(e.target.value)} style={input}/>
        <input placeholder="Food Item" value={item} onChange={e => setItem(e.target.value)} style={input}/>
        <input placeholder="Quantity" value={qty} onChange={e => setQty(e.target.value)} style={input}/>
        <input placeholder="Pickup Address" value={address} onChange={e => setAddress(e.target.value)} style={input}/>

        <button style={btn} onClick={submit}>Confirm Donation</button>
      </div>
    </div>
  )
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const card = {
  background: "#020617",
  padding: "40px",
  borderRadius: "10px",
  width: "360px",
  color: "white",
  boxShadow: "0 0 20px rgba(0,0,0,0.7)"
}

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "none"
}

const btn = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#22c55e",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
}
