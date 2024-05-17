import localFont from "next/font/local"
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

export default function Home() {
  const positionData = {
    creativeAssistant: {
      positionName: "Creative Assistant",
      image: "creative-assistant.png",
      alt: "Creative Assistant",
      positionDesc: "",
      applicationLink: ""
    },
    mediaIntern: {
      positionName: "Media Intern",
      image: "media-intern.png",
      alt: "Media Intern",
      positionDesc: "",
      applicationLink: ""
    },
    model: {
      positionName: "Model",
      image: "model.png",
      alt: "Model",
      positionDesc: "",
      applicationLink: ""
    }
  };
  
  const arrOfPositions = Object.values(positionData).map((position) => (
    <Position
      key={position.positionName}
      positionName={position.positionName}
      image={position.image}
      alt={position.alt}
      positionDesc={position.positionDesc}
      applicationLink={position.applicationLink}
    />
  ));
    
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
            <input className="text-lg md:text-2xl placeholder:text-white text-white align-center rounded-full bg-black shadow appearance-none border input-border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email Address"/>
          </div>
          <button className="text-lg md:text-2xl	button-color hover:bg-white text-black py-2 px-8 rounded-full focus:outline-none focus:shadow-outline" type="button">
            Subscribe
          </button>
        </div>


        <div className="flex flex-col justify-center latest-events content-center items-center">
          <div className={fabulous.className}>
            <h1 className="text-center text-white text-3xl m-4">Team Applications</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6 mx-4 md:mx-24 col-span-3">
            {arrOfPositions}
          </div>
        </div>
  
        <div className="flex mx-auto md:w-2/3 lg:w-1/2 justify-center items-center pb-16 flex-col md:flex-row">
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
          <div className="flex flex-col items-center justify-center pt-10 md:pt-0">
            <button className="sm:text-2xl lg:text-4xl button-color hover:bg-white text-black py-0.25 md:py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
              Link
            </button>
          </div>
      </div>
    </div>
  );
}

function Position(props) {
  const { positionName, image, alt, positionDesc, applicationLink } = props;
  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-center font-light text-2xl py-4">{positionName}</p>
      <img src={image} alt={alt} className="border border-solid border-white mb-4 md:mb-0"></img>
      <div className="flex flex-row items-center justify-center">
        <p className="text-white text-center font-light pt-1 text-base md:mr-4">Learn more</p>
        <a href={positionDesc}>
          <img src="link_arrow.png" className="h-8 md:pt-2 md:pl-1"></img>
        </a>
        <a href={applicationLink}>
          <button className="button-color hover:bg-white ml-4 text-black px-16 md:px-12 py-0.25 rounded-full focus:outline-none focus:shadow-outline md:mt-2 md:ml-4" type="button">
            apply
          </button>
        </a>
      </div>
    </div>
  );
}
