import { createContext, useState } from "react"

export const Context = createContext(null);

const ContextProvider = ({children}) => {

    const [randomDish, setRandomDish] = useState({
      name: 'Fahita',
        ingredients: ["Chicken", "Avocado", "Mayyonaise", "Bread"],
        side: ["Potato", "Soda", "Toom"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/KmcmV1X/fajita.jpg"
    });

    const states = {
        randomDish, setRandomDish
    }

  return (
    <Context.Provider value={states}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider;