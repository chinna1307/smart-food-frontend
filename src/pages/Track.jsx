import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Track() {
  const [city, setCity] = useState("");
  const [pos, setPos] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      async (p) => {
        const latitude = p.coords.latitude;
        const longitude = p.coords.longitude;

        setPos({ lat: latitude, lng: longitude });

        // Reverse geocode to city name
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const cityName =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown Area";

          setCity(cityName);

          // Send live location to backend
          await fetch("http://localhost:5000/api/location", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ city: cityName, lat: latitude, lng: longitude })
          });
        } catch (e) {
          console.error("Geo error", e);
        }
      },
      () => setError("Please allow location access in your browser."),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <button onClick={() => navigate(-1)} style={backBtn}>← Back</button>

        <h2>Live Tracking</h2>

        {error && <p style={{ color: "#ff4d4d" }}>{error}</p>}

        {!city && !error && <p>📡 Detecting your location...</p>}

        {city && (
          <>
            <div style={statusBadge}>
              <div style={dot}></div>
              <span>Tracking Active</span>
            </div>

            <h3 style={{ marginTop: 10 }}>📍 {city}</h3>
            <p style={hint}>Your location is being shared live.</p>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "sans-serif"
};

const cardStyle = {
  background: "#020617",
  padding: "30px",
  borderRadius: "16px",
  width: "360px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
  textAlign: "center"
};

const backBtn = {
  background: "none",
  border: "none",
  color: "#3b82f6",
  cursor: "pointer",
  marginBottom: "10px",
  fontSize: "16px"
};

const statusBadge = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  color: "#22c55e",
  background: "#0f172a",
  padding: "8px 14px",
  borderRadius: "30px",
  marginBottom: "10px",
  fontSize: "0.9rem"
};

const dot = {
  width: "10px",
  height: "10px",
  background: "#22c55e",
  borderRadius: "50%",
  boxShadow: "0 0 10px #22c55e"
};

const hint = {
  fontSize: "0.8rem",
  color: "#94a3b8",
  marginTop: "8px"
};
