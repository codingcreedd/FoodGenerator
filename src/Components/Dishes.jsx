import Footer from "./Footer"
import { Nav } from "./Nav"
import dishes from "../js/dishes"
import { Dish } from "./Dish"


export const Dishes = () => {
  return (
    <div className="flex flex-col bg-blue-950 overflow-hidden text-white">
        <Nav />

        <div className="grid lg:px-20 md:px-14 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
            {
                dishes.map(dish => (
                    <Dish name={dish?.name} ingredients={dish?.ingredients} side={dish?.side} estimatedMinPrice={dish?.estimatedMinPrice} estimatedMaxPrice={dish?.estimatedMaxPrice} src={dish?.src} />
                ))
            }
        </div>

        <Footer />
    </div>
  )
}
