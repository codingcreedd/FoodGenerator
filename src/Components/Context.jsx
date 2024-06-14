import { createContext, useState } from "react"

export const Context = createContext(null);

const ContextProvider = ({children}) => {

    const [randomDish, setRandomDish] = useState({
      name: '',
      ingredients: [],
      side: [],
      minPrice: 0,
      maxPrice: 0,
      src: ''
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