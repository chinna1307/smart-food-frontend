import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div style={{fontWeight:"bold",fontSize:20}}>Smart Food</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/request">Request</Link>
        <Link to="/track">Track</Link>
      </div>
    </nav>
  )
}
