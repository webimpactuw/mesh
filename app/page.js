import Image from "next/image";
import Navbar from "./components/Navbar";
import localFont from "next/font/local"
import Link from "next/link";

const fabulous = localFont({
  src: '/static-fonts/fabulous.otf',
  display: 'swap',
})



export default function Home() {
  return (
    <div>
      <div className="pt-4">
        <div className="flex flex-row justify-between overflow-x-auto">
          <img src="/images/home1.png" className="h-72 sm:h-96 pr-2" alt="Mesh fashion show"></img>
          <img src="/images/home2.png" className="h-72 sm:h-96 px-2" alt="Mesh representatives"></img>
          <img src="/images/home3.png" className="h-72 sm:h-96 px-2" alt="Mesh fashion show"></img>
          <img src="/images/home4.png" className="h-60 sm:h-96 pl-2" alt="Mesh fashion show"></img>
        </div>
        <div className="mt-5 text-white text-center text-xl mb-5">
          <p className="text-md">
            A collective of fashion designers & enthusiasts based at UW
          </p>
        </div>
      </div>


      

      <div className="flex flex-col justify-center latest-events content-center items-center">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl m-4">Upcoming Events</h1>
        </div>

        <div className="flex flex-row justify-center mb-6 space-x-10 mx-24">
          <div className="items-center">
            <div className="line"></div>
            <img src="latest_left.png" alt="Mesh event" className="border border-solid border-white"></img>
            <p className="text-white text-center font-light text-2xl pt-2">'24 Gala</p>
            <div className="flex flex-row items-center justify-center">
              <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
              <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
            </div>
            
          </div>

          <div className="hidden sm:block items-center">
            <div className="items-center">
              <div className="line"></div>
              <img src="latest_mid.png" alt="Mesh event" className="border border-solid border-white"></img>
              <p className="text-white text-center font-light text-2xl pt-2">Modeling Workshop</p>
              <div className="flex flex-row items-center justify-center">
                <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
              </div>
            </div>
          </div>


          <div className="hidden lg:block items-center">
            <div className="items-center">
              <div className="line"></div>
              <img src="latest_right.png" alt="Mesh event" className="border border-solid border-white"></img>
              <p className="text-white text-center font-light text-2xl pt-2">The Scene</p>
              <div className="flex flex-row items-center justify-center">
                <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
              </div>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col m-6">
          <button className="border font-light rounded px-4 py-2 text-white"><Link href="/events">More Events</Link></button>
        </div>
      </div>

      <div className="mb-4 mx-24">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl mt-4 mb-4">Instagram Feed</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white justify-center items-center justify-items-center">

          <InstagramFeed />

        </div>
        <div className="flex justify-center">
            <button className="border font-light rounded px-4 py-2 m-6 text-white"><a href="https://www.instagram.com/mesh.uw/?hl=en">View Full Feed</a></button>
          </div>
      </div>

    </div>
  );
}

async function InstagramFeed() {

  let instagramFeed = null;
  let error = null;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.IG_TOKEN}`;
    const data = await fetch(url);
    console.log("data", data);
    if (!data.ok) { 
      throw new Error("Failed to fetch Instagram feed");
    }
    instagramFeed = await data.json();
    console.log("Instagram feed:", instagramFeed);
  } catch (err) {
    console.error("Error fetching Instagram feed:", err.message);
    error = err.message;
  }

  const feed = (instagramFeed.data.map(post => (
    <div key={post.id} className="flex justify-center items-center w-full h-auto overflow-hidden">
      <div className="aspect-square overflow-hidden border border-solid border-white">
        <Link
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-content border"
        >
          {post.media_type === "VIDEO" ? (
            <video
              src={post.media_url}
              controls={false}
              className="object-cover "
            />
          ) : (
            <Image
              src={post.media_url}
              alt={post.caption}
              className="object-cover"
              layout="fill"
            />
          )}
        </Link>
      </div>
      
    </div>
  ))).slice(0, 6)

  return (
    <>
      {feed}
    </>
    
  );
}
