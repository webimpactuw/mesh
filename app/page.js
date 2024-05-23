/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "./components/Navbar";
import localFont from "next/font/local"
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const fabulous = localFont({
  src: '/static-fonts/fabulous.otf',
  display: 'swap',
})

async function getEvents() {
  const query = `*[_type == "events"] {
    title,
    date,
    image,
    altText,
    eventLink,
  }`

  const events = await client.fetch(query)
  return events;
}

export default async function Home() {
  const events = await getEvents();
  // console.log(events)

  return (

    <div>
      {/* Home Gallery */}
      <div className="pt-4">
        <div className="flex flex-row justify-between overflow-x-auto">
          <img src="/images/home1.png" className="h-72 sm:h-96 pr-2" alt="Mesh fashion show"></img>
          <img src="/images/home2.png" className="h-72 sm:h-96 px-2" alt="Mesh representatives"></img>
          <img src="/images/home3.png" className="h-72 sm:h-96 px-2" alt="Mesh fashion show"></img>
          <img src="/images/home4.png" className="h-72 sm:h-96 pl-2" alt="Mesh fashion show"></img>
        </div>
        <div className="mt-5 text-white text-center text-xl mb-5">
          <p className="text-md">
            A collective of fashion designers & enthusiasts based at UW
          </p>
        </div>
      </div>

      {/* Events */}
      <div className="flex flex-col justify-center latest-events content-center items-center">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl m-4">Upcoming Events</h1>
        </div>

        <div className="flex flex-row justify-center mb-6 space-x-8 mx-24">
          <div className="items-center">
            <div className="line"></div>
            <div className="h-80 w-96 overflow-hidden">
              <img src={urlForImage(events[0].image)} alt={events[0].altText} className="border border-solid border-white w-full h-full object-cover"></img>
            </div>
            <p className="text-white text-center font-light text-2xl pt-2">{events[0].title}</p>
            <Link className="flex flex-row items-center justify-center" href={events[0].eventLink}>
              <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
              <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
            </Link>
            
          </div>

          <div className="hidden sm:block items-center">
            <div className="items-center">
              <div className="line"></div>
              <div className="h-80 w-96 overflow-hidden">
                <img src={urlForImage(events[1].image)} alt={events[1].altText} className="border border-solid border-white w-full h-full object-cover"></img>
              </div>
              <p className="text-white text-center font-light text-2xl pt-2">{events[1].title}</p>
              <Link className="flex flex-row items-center justify-center" href={events[1].eventLink}>
                <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
              </Link>
            </div>
          </div>


          <div className="hidden xl:block items-center">
            <div className="items-center">
              <div className="line"></div>
              <div className="h-80 w-96 overflow-hidden">
                <img src={urlForImage(events[2].image)} alt={events[2].altText} className="border border-solid border-white w-full h-full object-cover"></img>
              </div>
              <p className="text-white text-center font-light text-2xl pt-2">{events[2].title}</p>
              <Link className="flex flex-row items-center justify-center" href={events[2].eventLink}>
                <p className="text-white text-center font-light pt-1 text-base">Learn more</p>
                <img src="link_arrow.png" className="h-8 pt-2 pl-1"></img>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col m-6">
          <button className="border font-light rounded px-4 py-2 text-white"><Link href="/events">More Events</Link></button>
        </div>
      </div>



      {/* Instagram Feed */}
      <div className="mb-4 mx-12 sm:mx-24">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl mt-4 mb-4">Instagram Feed</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white justify-center items-center justify-items-center">
          <InstagramFeed />
        </div>
        <div className="flex justify-center">
          <button className="border font-light rounded px-4 py-2 m-6 text-white">
            <a href="https://www.instagram.com/mesh.uw/?hl=en">View Full Feed</a>
          </button>
        </div>
      </div>

      <div className="mb-4 mx-24">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-3xl mt-4 mb-4">Instagram Feed</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 text-white">

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta1.jpg"></img>
          </div>

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta2.jpg"></img>
          </div>

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta3.jpg"></img>
          </div>

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta4.jpg"></img>
          </div>

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta5.jpg"></img>
          </div>

          <div className="flex justify-center items-center m-2">
            <img className="h-auto max-w-full border" src="insta/insta6.jpg"></img>
          </div>
        </div>
        <div className="flex justify-center">
            <button className="border font-light rounded px-4 py-2 m-6 text-white"><a href="https://www.instagram.com/mesh.uw/?hl=en">View Full Feed</a></button>
          </div>
      </div>

    </div>
  );
}

// Instagram Feed
async function InstagramFeed() {

  let instagramFeed = null;
  let error = null;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.IG_TOKEN}`;
    const data = await fetch(url);
    // console.log("data", data);
    if (!data.ok) { 
      throw new Error("Failed to fetch Instagram feed");
    }
    instagramFeed = await data.json();
    // console.log("Instagram feed:", instagramFeed);
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
              className="object-cover"
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
