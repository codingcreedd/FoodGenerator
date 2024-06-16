const Footer = () => {
  return (
    <div className="flex flex-col">
        <div className="md:flex max-md:flex-col md:justify-between bg-pink-400 lg:px-20 lg:py-14 md:px-14 md:py-10 px-6 py-6">
            <div className="flex flex-col flex-1">
                <h1 className="text-2xl md:text-4xl font-bold md:w-[50%] md:mb-20 mb-10">Hakuni Hon Kirmel Zid Aklet 3al App</h1>
                <input type="text" name="user_name" id="name" placeholder="Name" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
                <input type="text" name="user_email" id="email" placeholder="Email" className="md:w-[50%] bg-transparent border-b border-b-black pb-4 pc mb-8 outline-none" />
                <textarea name="message" id="message" cols="30" rows="10" className="md:w-[50%] bg-gray-300 rounded-xl px-4 py-4 pb-4 mb-8 outline-none"></textarea>
                <button type="submit" className="bg-black text-white px-8 py-4 md:w-[50%] rounded-lg font-bold max-md:mb-10" value="Send"></button>
            </div>

            <div className="flex-1 flex flex-col gap-6">
                <h1 className="text-2xl md:text-4xl font-bold md:w-[50%]">Message</h1>
                <h2 className="md:text-lg md:w-[55%]">W iza bedkon tehko ma3i private fikon tbaatoli email dghri ala moubayedmarwancoding@gmail.com</h2>
                <button className="px-4 py-2 bg-blue-600 border border-black md:w-[30%] rounded-full">Send Email</button>

                <h1 className="text-2xl md:text-4xl font-bold md:w-[50%] mt-10 md:mb-8 mb-4">Socials</h1>
                <div className="flex items-center gap-10 md:gap-14">
                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-github text-2xl md:text-3xl' ></i>
                        <p>Github</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-linkedin-square text-2xl md:text-3xl text-blue-700' ></i>
                        <p>LinkedIn</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <i className='bx bxl-instagram text-2xl md:text-3xl' ></i>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:px-20 lg:pt-14 lg:pb-6 md:px-14 md:pt-10 md:pb-4 px-6 pt-6 pb-3 bg-blue-950 text-white flex flex-col">
            <div className="md:flex max-md:flex-col md:justify-between pb-12 gap-20">
                <div className="flex flex-col flex-1 gap-5">
                    <h1 className="md:text-2xl font-bold">AKLET EL BET</h1>
                    <p className="max-md:mb-10 max-md:text-sm">Menkhali l shakhes maktir yfaker bl akle libido yaamla, l aklet l mawjodin hon hine l aklet libtaamlon emi fa hakoni mtl ma elet krimel zid</p>
                </div>

                <div className="flex md:gap-40 max-md:gap-10 max-md:mb-8">
                    <div className="flex-1 flex-col">
                        <h1 className="font-bold md:text-2xl mb-4">Other Pojects</h1>
                        <p className="mb-2 max-md:text-sm">Weather App</p>
                        <p className="mb-2 max-md:text-sm">Gemini Clone</p>
                        <p className="mb-2 max-md:text-sm">Memory Card Game</p>
                        <p className="mb-2 max-md:text-sm">eCommerce Websites</p>
                        <p className="mb-2 max-md:text-sm">Resume Builder</p>
                        <p className="mb-2 max-md:text-sm">Battleship Game</p>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <h1 className="font-bold md:text-2xl mb-4 ">Other</h1>
                        <p className="mb-2 max-md:text-sm">Dishes</p>
                        <p className="mb-2 max-md:text-sm">Resources</p>
                        <p className="mb-2 max-md:text-sm">Blog</p>
                        <p className="mb-10 max-md:text-sm">FAQ</p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <p className="md:mb-10 mb-4 max-md:text-sm
                    ">Follow my Github page to get updates with the latest projects</p>
                    <p className="max-md:text-sm">Share my work with others if you want</p>
                    <div className="bg-white px-4 py-4 md:mt-10 max-md:mt-4 text-black rounded-lg">
                        Sahten Aa Albkon
                    </div>
                </div>
            </div>

            <hr className="h-[2px] md:mb-10 md:mt-10 max-md:mb-4 max-md:mt-4"/>

            <div className="flex justify-between">
                <div className="max-md:text-sm">&copy; All Rights Reserved</div>
                <div className="flex items-center gap-4">
                    <i className='bx bxl-github md:text-3xl' ></i>
                    <i className='bx bxl-linkedin-square md:text-3xl' ></i>
                    <i className='bx bxl-instagram md:text-3xl' ></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer