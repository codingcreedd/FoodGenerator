import { useState } from "react"
import Footer from "./Footer"
import { Nav } from "./Nav"
import {v4 as uuid} from 'uuid';
import { Dish } from "./Dish";
import dishes from "../js/dishes";

let elements = [
    {
        title: "Ingredients",
        list: ["chicken", "avocado", "mayyonaise", "bread", "flayfleh helwe", "chicken breasts", "burger bread", "tomato", "basal", "cream", "shmandar", "rice", "potato", "mushroom", "jebne", "Hamod", "Lahme", "Toom", "Khas", "Laban", "Zet", "Fool", "Hommos", "Maacarona", "Dura", "Eggs", "Koosa", "Pepperoni", "Zaytoon", "Zbib", "T7ine", "Tuna", "Rimmen", "Kizebra", "Khodar"]

    },
    {
        title: "Side",
        list: ["potato", "soda", "toom", "", "garlic", "toom", "kabis", "other drinks", "hamod", "lemon", "fattoush", "mayyonaise", "mayyonaise salad", "Laban", "Hommos", "bread", "Fijel", "Salata", "Khyar Bi Laban", "bread"]
    },
];

const Element = ({name, children}) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-2 text-white">
            <div className="flex items-center justify-between py-4 cursor-pointer" onClick={() => {setOpen(!open)}}>
                <p className="text-lg font-bold hover:underline transition-all">{name}</p>
                {!open ? <i className='bx bx-chevron-down text-2xl'></i> : <i className='bx bx-chevron-up text-2xl' ></i>}
            </div>
            {
                open ? (
                    children
                ) : (
                    null
                )
            }
            <hr className="" />
        </div>
    )
}

const DishesPage = () => {

    const [dishesByIngredients, setDishesByIngredients] = useState([]);

    const handleIngRender = (item) => {
        let newItem = dishes.find((dish) => dish.ingredients.includes(item));
        if(newItem){
            setDishesByIngredients([...dishesByIngredients, newItem]);
            console.log(dishesByIngredients)
        }
    }

    const renderDishes = () => {
        const dishesArray = [];
        if(dishesByIngredients.length >= 1){
            for(let i = 0; i < dishesByIngredients.length; i++){
                dishesArray.push(<Dish key={uuid()} name={dishesByIngredients[i]?.name} ingredients={dishesByIngredients[i]?.ingredients} side={dishesByIngredients[i]?.side} estimatedMinPrice={dishesByIngredients[i]?.estimatedMinPrice} estimatedMaxPrice={dishesByIngredients[i]?.estimatedMaxPrice} src={dishesByIngredients[i]?.src} />)
            }
        }

        return <div>
            {dishesArray}
        </div>
    }

  return (
    <div className="flex flex-col bg-blue-950 overflow-hidden">
        <Nav />

        <div className="flex lg:px-20 md:px-14 px-6 dark:bg-blue-950 dark:text-white py-4 border-t">
            <div className="lg:flex flex-col hidden w-[20%]">
                {
                    elements.map(element => (
                        <Element key={uuid()} name={element?.title}>
                            <div className="grid grid-cols-2">
                                {
                                    element.list.map(item => (
                                        <div key={uuid()} className="flex items-center gap-4">
                                            <input type="checkbox" className="text-2xl border-none" onClick={() => {handleIngRender(item)}}/>
                                            <p>{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Element>
                    ))
                }
            </div>

            <div className="flex-1">
                {renderDishes()}
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default DishesPage