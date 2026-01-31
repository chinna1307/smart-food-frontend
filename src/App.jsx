import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Donate from "./pages/Donate"
import Receivers from "./pages/Receivers"
import Request from "./pages/Request"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/request" element={<Request />} />
      <Route path="/receivers" element={<Receivers />} />
    </Routes>
  )
}
