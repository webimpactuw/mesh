/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

// /* eslint-disable @next/next/no-img-element */
// import React from 'react';
// import Image from 'next/image';
// import { Jost } from "next/font/google";
// import Bio from './components/Bio';
// import { client } from '@/sanity/lib/client';


// import "../globals.css";
// import localFont from "next/font/local"

// const fabulous = localFont({
//   src: '../static-fonts/fabulous.otf',
//   display: 'swap',
// })

// async function getEvents() {
//   const query = `*[_type == "event"]`

//   const sanityEvents = await client.fetch(`*[_type == "event"]`)
//   return sanityEvents;

// }



// import EventsMap from './components/EventMap';
// import Events from './components/Events';

// export default async function events() {
//   const events =  getEvents();
  
//   return (
    // <div class="w-full h-full bg-[#121212]">
       
    //   <div class="m-auto text-center">
    //     <div className={fabulous.className}>
    //     <h1  class="text-4xl pb-6 text-[#FFFFFF]">Events</h1>
    //     </div>

    //     <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
    //       <Image src="/audience.png" width={1000} height={500} alt="audience" />
    //     </figure>
    //     <Bio imageUrl="/audience.png" />
    //   </div>

    //   <div class="flex flex-col ml-28">
    //   {/* <EventsMap /> */}
    //   {/* <GetEventsS /> */}
    //     {events.map((event) => (
    //       <div key={event._id}>
    //         <Events image={event.image} title={event.title} date={event.date} />
    //       </div>
    //     ))}
      
        
        
    //   </div>
    // </div>
//   );}

"use client"
import localFont from "next/font/local"
import React, { useState, useEffect} from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Events from "./components/Events";
import Bio from "./components/Bio";
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

async function getEvents() {
    const query = `*[_type == "events"] {
      title,
      date,
      image,
    }`
  
    const events = await client.fetch(query)
    return events;
  }
  
function EventBlock({sortBy}) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const fetchedEvents = await getEvents();
            setEvents(fetchedEvents);
        }

        fetchEvents();
    }, []);

    const sortedEvents = [...events].sort((a, b) => {
        if (sortBy === 'asc') {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === 'desc') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return 0;
        }
    });
    return (
        // <div class="w-full h-full bg-[#121212]">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1">
          

        {sortedEvents.map((event) => (
            <div className="flex flex-row gap-x-16 pt-4">
                    <Events imageUrl={event.image} title={event.title} date={event.date} />
                </div>
        ))}
        </div>
        
    );
 }

export default function EventPage() {
    const [sortBy, setSortBy] = useState('desc');

    const handleSortToggle = () => {
        setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
    };
    return (
        // <div >
        //   <div className="flex flex-row-reverse mr-10 mb-10">
        //         <button onClick={handleSortToggle} class="bg-[#43B697] rounded-lg w-40 p-1 text-xl">
        //             sort by {sortBy === 'asc' ? '↑' : '↓'}
        //         </button>
        //     </div>
        //     <div>
        //         <EventBlock sortBy={sortBy}/>
        //     </div>
        // </div>
        <div class="w-full h-full bg-[#121212]">
       
      <div class="m-auto text-center">
        <div className={fabulous.className}>
        <h1  class="text-4xl pb-6 text-[#FFFFFF]">Events</h1>
        </div>

        <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
          <img src="/audience.png" alt="audience" />
        </figure>
        <Bio imageUrl="/audience.png" />
      </div>

      <div class="flex flex-col ml-28 overflow-hidden">
      {/* <EventsMap /> */}
      {/* <GetEventsS /> */}
      <div class="justify-between flex -gap-y-2">
                <button onClick={handleSortToggle} class="bg-[#43B697] rounded-lg w-40 p-1 mr-20 m-auto text-xl">
                    sort by {sortBy === 'asc' ? '↑' : '↓'}
                 </button>
             </div>
             <div>
                <EventBlock sortBy={sortBy}/>
             </div>
        
        
      </div>
    </div>



    );
}





