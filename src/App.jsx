import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import { Nav } from "./Components/Nav"

function App() {

  return (
    <div className="flex flex-col bg-blue-950">
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
