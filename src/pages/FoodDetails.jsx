import { useParams, useNavigate } from "react-router-dom"

export default function FoodDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const items = [
    {
      id: "1",
      food: "Veg Biryani",
      qty: "25 plates",
      donor: "Geetha Residency",
      location: "KPHB Colony, Hyderabad",
      phone: "9876543210"
    },
    {
      id: "2",
      food: "Pulihora & Curd Rice",
      qty: "60 plates",
      donor: "Sri Lakshmi Function Hall",
      location: "Madhapur, Hyderabad",
      phone: "9123456789"
    },
    {
      id: "3",
      food: "Idli, Sambar & Chutney",
      qty: "80 pieces",
      donor: "Sai Baba Trust",
      location: "Ameerpet, Hyderabad",
      phone: "9988776655"
    }
  ]

  const item = items.find(i => i.id === id)

  if (!item) return <h1 style={{ color: "white" }}>Item not found</h1>

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020617",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#1e293b",
        color: "white",
        padding: 30,
        borderRadius: 12,
        width: 350,
        boxShadow: "0 0 20px rgba(0,0,0,0.6)"
      }}>
        <h2>{item.food}</h2>
        <p><b>Quantity:</b> {item.qty}</p>
        <p><b>Donor:</b> {item.donor}</p>
        <p><b>Location:</b> {item.location}</p>
        <p><b>Phone:</b> {item.phone}</p>

        <button
          style={{ width: "100%", marginTop: 15 }}
          onClick={() => alert("Donation confirmed!")}
        >
          Confirm Donation
        </button>

        <button
          style={{ width: "100%", marginTop: 10, background: "#334155" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}
