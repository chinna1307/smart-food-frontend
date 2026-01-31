import { useEffect, useState } from "react"

export default function Track() {
  const [pos, setPos] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported")
      return
    }

    const watch = navigator.geolocation.watchPosition(
      (p) => {
        setPos({
          lat: p.coords.latitude,
          lng: p.coords.longitude
        })
      },
      () => setError("Location permission denied")
    )

    return () => navigator.geolocation.clearWatch(watch)
  }, [])

  return (
    <div style={{ padding: 30 }}>
      <h2>Live Location Tracking</h2>

      {error && <p>{error}</p>}

      {pos ? (
        <>
          <p>Latitude: {pos.lat}</p>
          <p>Longitude: {pos.lng}</p>

          <iframe
            title="map"
            width="100%"
            height="400"
            src={`https://maps.google.com/maps?q=${pos.lat},${pos.lng}&z=15&output=embed`}
          />
        </>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  )
}
