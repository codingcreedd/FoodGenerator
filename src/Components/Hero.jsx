import { useContext } from "react"
import dishes from "../js/dishes"
import { Context } from "./Context"
import { Dish } from "./Dish";

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
    <div className="px-20 mb-10 pb-20">
        <div className="flex mt-14 mb-10 shadow-2xl px-10 py-8 bg-white rounded-xl ">
            <div className="flex flex-col gap-6 flex-1">
                <h1 className="text-5xl font-bold text-blue-700">Food Generator</h1>
                <p className="max-w-[50%] text-lg font-bold mb-14">Hayda l website la ayya hada byes2al ebno shu khater bibelak akel lyom (Hal 7ale bitsir kel yom ma3i), w ayya hada bedo yeni zid akle mish mawjode hon yebaat email mn tahet bl footer</p>
                
                <h1 className="text-4xl font-bold text-blue-700">All Dishes</h1>
                <button className="px-6 py-4 bg-blue-700 rounded-2xl text-white font-bold w-[50%] mb-8">Dishes</button>

                <h1 className="text-4xl font-bold text-blue-700">Get Random Dish</h1>
                <button className="px-6 py-4 bg-blue-700 rounded-2xl text-white font-bold w-[50%] mb-8" onClick={getRandomDish}>Random</button>

                <h1 className="text-4xl font-bold text-blue-700">Search By ingredients</h1>
                <button className="px-6 py-4 bg-blue-700 rounded-2xl text-white font-bold w-[50%] mb-8">Dishes Page</button>
            </div>
            
            <div className="flex-1">
                {
                    randomDish ? (
                        <Dish
                            name={randomDish?.name}
                            ingredients={randomDish?.ingredients}
                            side={randomDish?.side}
                            minPrice={randomDish?.estimatedMinPrice}
                            maxPrice={randomDish?.estimatedMaxPrice}
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