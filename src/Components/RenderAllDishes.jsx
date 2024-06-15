import dishes from "../js/dishes"
import {v4 as uuid} from 'uuid'
import { Dish } from "./Dish"

const RenderAllDishes = () => {
  return (
    <div className="grid lg:px-20 md:px-14 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6 bg-gray-300 dark:bg-blue-950 dark:text-white py-4">
            {
                dishes.map(dish => (
                    <div key={uuid()}>
                        <div>
                            <Dish key={uuid()} name={dish?.name} ingredients={dish?.ingredients} side={dish?.side} estimatedMinPrice={dish?.estimatedMinPrice} estimatedMaxPrice={dish?.estimatedMaxPrice} src={dish?.src} />
                            <hr className="h-[2px] mt-4 mb-4 bg-blue-950 hidden max-sm:block" />
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default RenderAllDishes;