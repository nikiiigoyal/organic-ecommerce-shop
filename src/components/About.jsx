import TeamSection from "./TeamMembers";

export function About () {
    return (
        <>
        <div className="font-poppins">
            <div className="flex flex-row w-[80%] mx-auto">
                <div className="flex flex-col justify-center w-[40%]">
                <h1 className="text-3xl font-bold">100% Trusted Organic Food Store</h1>
                <p className="text-sm text-gray-600">Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
            </div>
            <img src="/src/components/images/faqimg.png" className="w-[400px]"></img>
            </div>
{/* second */}
            <div className="flex flex-row w-[80%]mx-auto justify-start">
            <img src="/src/components/images/about.png" className="w-[50%]"></img>
                <div className="flex flex-col justify-center w-[40%]">
                <h1 className="text-3xl font-bold mb-5">100% Trusted Organic Food Store</h1>
                <p className="text-sm text-gray-600 mb-5">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                </p>
                <div className="flex flex-row items-center">
                    <div className="left flex flex-col">
                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">100% Organic food</h3>
                        <p className="text-gray-500 text-sm p-1">100% healthy & Fresh food.</p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">Customer Feedback</h3>
                        <p className="text-gray-500 text-sm p-1">Our happy customer</p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">Free Shipping</h3>
                        <p className="text-gray-500 text-sm p-1">Free shipping with discount.</p>
                    </div>
                  </div>
                    </div>


                   <div className="right flex flex-col">
                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">Great Support 24/7</h3>
                        <p className="text-gray-500 text-sm p-1">Instant access to Contact.</p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">100% Sucure Payment</h3>
                        <p className="text-gray-500 text-sm p-1">We ensure your money is save</p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <img src="/src/components/images/leaf.png"></img>
                    <div>
                        <h3 className="text-black text-sm font-bold p-1">100% Organic Food</h3>
                        <p className="text-gray-500 text-sm p-1">100% healthy & Fresh food..</p>
                    </div>
                  </div>
                    </div>
                </div>
            </div>
            
            </div>

            {/* third */}
            <div className="flex flex-row w-[80%] mx-auto my-8">
                <div className="flex flex-col justify-evenly w-[40%]">
                <h1 className="text-3xl font-bold">We Delivered, You Enjoy Your Order.</h1>
                <p className="text-sm text-gray-600">Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                </p>
                <div className="flex flex-col p-3">
                    <label>
                        <input className= ""type="checkbox" checked></input>
                        <span className="text-sm text-gray-400">Sed in metus pellentesque.</span>
                    </label>
                    <label>
                        <input className= ""type="checkbox" checked></input>
                        <span className="text-sm text-gray-400">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span>
                    </label>
                    <label>
                        <input className= ""type="checkbox" checked></input>
                        <span className="text-sm text-gray-400">Maecenas ut nunc fringilla erat varius.</span>
                    </label>
                </div>
                <button className="bg-[#00B207] text-white  py-2 px-4 mt-4 w-[162px] h-[45px] rounded-full hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline"/>
        </button>
            </div>
            <img src="/src/components/images/faqimg.png" className="w-[400px]"></img>
            </div>
        </div>
        <div className="w-[80%] mx-auto">
            <TeamSection />
        </div>
        </>
    )
}