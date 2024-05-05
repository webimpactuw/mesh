import localFont from "next/font/local"
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

export default function Home() {
    return (
      <div>
        <div className="pt-4">
        </div>
        <div>
          <header className="text-center font-bold p-10 pb-5 text-4xl text-white">
            <h1 className={fabulous.className}>Get Involved</h1>
          </header>
            <div className="text-center font-light text-white">
              <p>Sign up to receive updates on our open positions!</p>
            </div>
        </div>
        <div className="flex justify-center items-center py-6">
          <div className="px-2">
            {/* <label className="text-lg" for="username">
            </label> */}
            <input className="text-2xl placeholder:text-white text-white align-center rounded-full bg-black shadow appearance-none border input-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email Address"/>
          </div>
          <button className="text-2xl	button-color hover:bg-white text-black py-2 px-8 rounded-full focus:outline-none focus:shadow-outline" type="button">
            Subscribe
          </button>
        </div>


        <div className="flex flex-col justify-center latest-events content-center items-center">
          <div className={fabulous.className}>
            <h1 className="text-center text-white text-3xl m-4">Team Applications</h1>
          </div>

          <div className="flex flex-row justify-center mb-6 space-x-10 mx-24">
            <div className="">
              <p className="text-white text-center font-light text-2xl py-4">Creative Assistant</p>
              <img src="creative-assistant.png" alt="Creative Assistant" className="border border-solid border-white"></img>
              <div className="flex flex-row items-center justify-center py-4">
                <div class="flex">
                  <div className="inline-flex">
                    <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                    <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
                  </div>
                  <div className="flex flex-col items-center justify-center pl-4">
                    <button className="button-color hover:bg-white text-black px-24 py-0.25 rounded-full focus:outline-none focus:shadow-outline" type="button">
                      apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-white text-center font-light text-2xl py-4">Media Intern</p>
              <img src="media-intern.png" alt="Media Intern" className="border border-solid border-white"></img>
              <div className="flex flex-row items-center justify-center py-4">
                <div class="flex">
                  <div className="inline-flex">
                    <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                    <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
                  </div>
                  <div className="flex flex-col items-center justify-center pl-4">
                    <button className="button-color hover:bg-white text-black px-24 py-0.25 rounded-full focus:outline-none focus:shadow-outline" type="button">
                      apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-white text-center font-light text-2xl py-4">Model</p>
              <img src="model.png" alt="Model" className="border border-solid border-white"></img>
              <div className="flex flex-row justify-center py-4">
                <div class="flex">
                  <div className="inline-flex">
                    <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                    <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
                  </div>
                  <div className="flex flex-col items-center justify-center pl-4">
                    <button className="button-color hover:bg-white text-black px-24 py-0.25 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    apply
                  </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      
        <div className="flex mx-auto w-1/2 justify-center items-center pb-16">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center font-light p-10 pb-5 text-3xl text-white"> 
              Donate to our cause
            </p>
            <p className="text-white w-3/4 font-regular text-center mx-auto">
              Support style with purpose! Your donation drives creativity, inclusivity, and sustainability. Join us in redefining style and making a positive impact
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">

        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="text-4xl button-color hover:bg-white text-black py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
            Link
          </button>
        </div>
      </div>
    </div>
  );
}