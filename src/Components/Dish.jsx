import {v4 as uuid} from 'uuid';

export const Dish = ({name, ingredients, side, minPrice, maxPrice, src}) => {
  return (
    <div className="flex flex-col">
        <div className="relative md:mb-10 mb-6 rounded-xl">
            <img src={src} alt={name} border="0" className='rounded-xl w-full max-h-[700px] shadow-2xl'/>
            <div className="absolute md:bottom-16 md:left-10 bottom-6 left-5 text-white">
                <h1 className="text-3xl font-bold mb-6">{name}</h1>
                <p className="text-2xl font-bold">${minPrice} to ${maxPrice}</p>
            </div>
        </div>

        <div className='flex justify-center gap-20'>
            <div className="flex flex-col gap-6 mb-10">
                <h1 className="text-2xl font-bold text-blue-700">Ingredients</h1>
                <div className="flex flex-col">
                    {
                        ingredients.map((ingredient ,index) => (
                            <div key={uuid()} className='flex gap-4 items-center text-sm'>
                                <strong>{index + 1}.</strong>
                                <p>{ingredient}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-blue-700">Side</h1>
                <div className="flex flex-col">
                    {
                        side.map((side_ ,index) => (
                            <div key={uuid()} className='flex gap-4 items-center text-sm'>
                                <strong>{index + 1}.</strong>
                                <p>{side_}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
  )
}
