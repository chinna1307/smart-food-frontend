import { useNavigate } from "react-router-dom"

export default function Test() {
  const navigate = useNavigate()

  const foodOrders = [
    {
      id: 1,
      food: "Veg Biryani",
      qty: "25 plates",
      donor: "Geetha Residency",
      location: "KPHB Colony, Hyderabad",
      phone: "9876543210"
    },
    {
      id: 2,
      food: "Pulihora & Curd Rice",
      qty: "60 plates",
      donor: "Sri Lakshmi Function Hall",
      location: "Madhapur, Hyderabad",
      phone: "9123456789"
    },
    {
      id: 3,
      food: "Idli, Sambar & Chutney",
      qty: "80 pieces",
      donor: "Sai Baba Trust",
      location: "Ameerpet, Hyderabad",
      phone: "9988776655"
    }
  ]

  return (
    <div style={{ padding: 40 }}>
      <h2>Available Food Near You</h2>

      {foodOrders.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid #444",
            borderRadius: 10,
            padding: 16,
            margin: "14px 0",
            background: "#1f2933",
            color: "white"
          }}
        >
          <h3>{item.food}</h3>
          <p>Quantity: {item.qty}</p>
          <p>From {item.donor}</p>
          <p>{item.location}</p>
          <p>{item.phone}</p>

          <button
            style={{ width: "100%", marginTop: 10 }}
            onClick={() => navigate(`/food/${item.id}`)}
          >
            Donate This Item
          </button>
        </div>
      ))}
    </div>
  )
}
