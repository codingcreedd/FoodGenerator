import Footer from "./Footer"
import { Nav } from "./Nav"
import RenderAllDishes from './RenderAllDishes'


export const Dishes = () => {
  return (
    <div className="flex flex-col bg-blue-950 overflow-hidden">
        <Nav />
        <RenderAllDishes />
        <Footer />
    </div>
  )
}
