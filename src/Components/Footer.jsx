const Footer = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between bg-pink-400 px-20 py-14">
            <div className="flex flex-col flex-1">
                <h1 className="text-4xl font-bold w-[50%] mb-20">Hakuni Hon Kirmel Zid Aklet 3al App</h1>
                <input type="text" name="name" id="name" placeholder="Name" className="w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
                <input type="text" name="email" id="email" placeholder="Email" className="w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
                <textarea name="" id="" cols="30" rows="10" className="w-[50%] bg-gray-300 rounded-xl px-4 py-4 pb-4 mb-8 outline-none"></textarea>
                <button className="bg-black text-white px-8 py-4 w-[50%] rounded-lg font-bold">Submit</button>
            </div>

            <div className="flex-1 flex flex-col gap-6">
                <h1 className="text-4xl font-bold w-[50%]">Message</h1>
                <h2 className="text-lg w-[55%]">W iza bedkon tehko ma3i private fikon tbaatoli email dghri ala moubayedmarwancoding@gmail.com</h2>
                <button className="px-4 py-2 bg-blue-600 border border-black w-[30%] rounded-full">Send Email</button>

                <h1 className="text-4xl font-bold w-[50%] mt-10 mb-8">Socials</h1>
                <div className="flex items-center gap-14">
                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-github text-3xl' ></i>
                        <p>Github</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-linkedin-square text-3xl text-blue-700' ></i>
                        <p>LinkedIn</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-instagram text-3xl' ></i>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-20 pt-14 pb-6 bg-blue-950 text-white flex flex-col">
            <div className="flex justify-between pb-12 gap-20">
                <div className="flex flex-col flex-1 gap-5">
                    <h1 className="text-2xl font-bold">AKLET EL BET</h1>
                    <p className="">Menkhali l shakhes maktir yfaker bl akle libido yaamla, l aklet l mawjodin hon hine l aklet libtaamlon emi fa hakoni mtl ma elet krimel zid</p>
                </div>

                <div className="flex-1 flex-col">
                    <h1 className="font-bold text-2xl mb-4">Other Pojects</h1>
                    <p className="mb-2">Weather App</p>
                    <p className="mb-2">Gemini Clone</p>
                    <p className="mb-2">Memory Card Game</p>
                    <p className="mb-2">eCommerce Websites</p>
                    <p className="mb-2">Resume Builder</p>
                    <p className="mb-2">Battleship Game</p>
                </div>

                <div className="flex-1 flex flex-col">
                    <h1 className="font-bold text-2xl mb-4">Other</h1>
                    <p className="mb-2">Dishes</p>
                    <p className="mb-2">Resources</p>
                    <p className="mb-2">Blog</p>
                    <p>FAQ</p>
                </div>

                <div className="flex-1 flex flex-col">
                    <p className="mb-10
                    ">Follow my Github page to get updates with the latest projects</p>
                    <p>Share my work with others if you want</p>
                    <div className="bg-white px-4 py-4 mt-10 text-black rounded-lg">
                        Sahten Aa Albkon
                    </div>
                </div>
            </div>

            <hr className="h-[2px] mb-10 mt-10"/>

            <div className="flex justify-between">
                <div>&copy; All Rights Reserved</div>
                <div className="flex items-center gap-4">
                    <i className='bx bxl-github text-3xl' ></i>
                    <i className='bx bxl-linkedin-square text-3xl' ></i>
                    <i className='bx bxl-instagram text-3xl' ></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer