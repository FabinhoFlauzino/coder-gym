import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import BgImage from "./assets/bg.png"
import { Equipaments } from "./components/Equipaments"

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipaments />
    </div>
  )
}

export default App
