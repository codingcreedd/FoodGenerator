import {v4 as uuid} from 'uuid';

export const Dish = ({name, ingredients, side, minPrice, maxPrice, src}) => {
  return (
    <div className="flex flex-col">
        <div className="relative mb-10 rounded-xl">
            <img src={src} alt={name} border="0" className='rounded-xl w-full max-h-[700px] shadow-2xl'/>
            <div className="absolute bottom-16 left-10 text-white">
                <h1 className="text-3xl font-bold mb-6 ">{name}</h1>
                <p className="text-2xl font-bold">${minPrice} to ${maxPrice}</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-20'>
            <div className="flex flex-col gap-6 mb-10">
                <h1 className="text-2xl font-bold text-blue-700">Ingredients</h1>
                <div className="flex flex-col">
                    {
                        ingredients.map((ingredient ,index = 1) => (
                            <div key={uuid()} className='flex gap-4 items-center text-sm'>
                                <strong>{index}.</strong>
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
                        side.map((side_ ,index = 1) => (
                            <div key={uuid()} className='flex gap-4 items-center text-sm'>
                                <strong>{index}.</strong>
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
