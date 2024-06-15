import { useState } from "react"
import Footer from "./Footer"
import { Nav } from "./Nav"
import {v4 as uuid} from 'uuid';
import { Dish } from "./Dish";
import dishes from "../js/dishes";

let elements = [
    {
        title: "Ingredients",
        list: ["Chicken", "Avocado", "mayyonaise", "bread", "Flayfleh Helwe", "Chicken breasts", "Burger Bread", "Tomato", "Basal", "Cream", "Shmandar", "Rice", "Potato", "Mushroom", "Jebne", "Hamod", "Lahme", "Toom", "Khas", "Laban", "Zet", "Fool", "Hommos", "Maacarona", "Dura", "Eggs", "Koosa", "Pepperoni", "Zaytoon", "Zbib", "T7ine", "Tuna", "Rimmen", "Kizebra", "Khodar"]

    },
    {
        title: "Side",
        list: ["Potato", "Soda", "Toom", "Garlic", "Toom", "Kabis", "Other Drinks", "Hamod", "Fattoush", "Mayyonaise", "Mayyonaise Salad", "Laban", "Hommos", "bread", "Fijel", "Salata", "Khyar Bi Laban", "Bread"]
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
    const [openMenu, setOpenMenu] = useState(false);

    const handleIngRender = (item, type) => {
        let newArray = [...dishesByIngredients];
        for (let i = 0; i < dishes.length; i++) {
          if (type === 'ingredients' && dishes[i].ingredients.includes(item) &&!dishesByIngredients.includes(dishes[i])) {
            newArray.push(dishes[i]);
          }
          else if(type === 'side' && dishes[i].side.includes(item) &&!dishesByIngredients.includes(dishes[i])){
            newArray.push(dishes[i])
          }
        }
        
        setDishesByIngredients([...newArray]);
      };

    const renderDishes = () => {
        const dishesArray = [];
        if(dishesByIngredients.length >= 1){
            for(let i = 0; i < dishesByIngredients.length; i++){
                dishesArray.push(<Dish key={uuid()} name={dishesByIngredients[i]?.name} ingredients={dishesByIngredients[i]?.ingredients} side={dishesByIngredients[i]?.side} estimatedMinPrice={dishesByIngredients[i]?.estimatedMinPrice} estimatedMaxPrice={dishesByIngredients[i]?.estimatedMaxPrice} src={dishesByIngredients[i]?.src} />)
            }
        }

        return <div className="grid lg:px-20 md:px-14  sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-6 dark:bg-blue-950 dark:text-white py-4">
            {dishesArray}
        </div>
    }

  return (
    <div className="flex flex-col bg-blue-950 overflow-hidden">
        <Nav />

        <div className="flex lg:px-20 md:px-14 px-6 dark:bg-blue-950 dark:text-white py-4 border-t max-lg:flex-col">
            {
                !openMenu ? (
                    <i className='bx bx-menu text-center text-2xl text-white mb-10 hidden max-lg:block cursor-pointer' onClick={() => {setOpenMenu(!openMenu)}}></i>
                ) : (
                    <i className='bx bx-x text-center text-2xl text-white mb-10 hidden max-lg:block cursor-pointer' onClick={() => {setOpenMenu(!openMenu)}}></i>
                )
            }
            <div className={`${!openMenu ? 'max-md:hidden' : ''} max-lg:flex max-lg:justify-between lg:flex-col lg:w-[20%]`}>
                {
                    elements.map(element => (
                        <Element key={uuid()} name={element?.title}>
                            <div className="grid grid-cols-2">
                                {
                                    element.list.map(item => (
                                        <div key={uuid()} className="flex items-center gap-4">
                                            <input type="checkbox" className="text-2xl border-none" onClick={() => {handleIngRender(item, `${element.title === 'Ingredients' ? 'ingredients' : 'side'}`)}}/>
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