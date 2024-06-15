import { useContext } from "react"
import dishes from "../js/dishes"
import { Context } from "./Context"
import { Dish } from "./Dish";
import { Link } from "react-router-dom";

const Hero = () => {

    const {randomDish, setRandomDish} = useContext(Context);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRandomDish = () => {
        let randomNubmer = getRandomInt(0, dishes.length - 1);
        setRandomDish(dishes[randomNubmer]);
    }

  return (
    <div className="lg:px-20 lg:mb-10 lg:pb-20 md:pb-14 md:mb-8 md:px-14 px-6 mb-6 pb-10">
        <div className="md:flex md:mt-14 md:mb-10 shadow-2xl md:px-10 md:py-8 bg-white rounded-xl max-md:flex-col mt-10 mb-8 px-6 py-5">
            <div className="flex flex-col gap-6 flex-1">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-700">Food Generator</h1>
                <p className="md:max-w-[50%] text-sm md:text-lg font-bold md:mb-14">Hayda l website la ayya hada byes2al ebno shu khater bibelak akel lyom (Hal 7ale bitsir kel yom ma3i), w ayya hada bedo yeni zid akle mish mawjode hon yebaat email mn tahet bl footer</p>
                
                <h1 className="text-2xl md:text-4xl font-bold text-blue-700">All Dishes</h1>
                <Link to="dishes" className="px-4 py-3 md:px-6 md:py-4 bg-blue-700 rounded-2xl text-white font-bold md:w-[50%] md:mb-8 mb-2">Dishes</Link>

                <h1 className="text-2xl md:text-4xl font-bold text-blue-700">Search By ingredients</h1>
                <Link to="dishbyingredient" className="px-6 py-4 bg-blue-700 rounded-2xl text-white font-bold md:w-[50%] mb-2 md:mb-8">Dishes Page</Link>
                
                <h1 className="text-2xl md:text-4xl font-bold text-blue-700">Get Random Dish</h1>
                <button className="px-4 py-3 md:px-6 md:py-4 bg-blue-700 rounded-2xl text-white font-bold md:w-[50%] mb-8" onClick={getRandomDish}>Random</button>
            </div>
            
            <div className="flex-1">
                {
                    randomDish ? (
                        <Dish
                            name={randomDish?.name}
                            ingredients={randomDish?.ingredients}
                            side={randomDish?.side}
                            estimatedMinPrice={randomDish?.estimatedMinPrice}
                            estimatedMaxPrice={randomDish?.estimatedMaxPrice}
                            src={randomDish?.src}
                        />
                    ) : (
                        null
                    )
                }
            </div>

        </div>
    </div>

  )
}

export default Hero