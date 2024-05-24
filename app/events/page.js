
"use client"
import localFont from "next/font/local"
import React, { useState, useEffect} from "react";
import { client } from "@/sanity/lib/client";
import Events from "./components/Events";
import Bio from "./components/Bio";

const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

async function getEvents() {
    const query = `*[_type == "eventPage" && mainImage == false] {
      title,
      date,
      image,
    }`
  
    const events = await client.fetch(query)
    return events;
}

async function getMainEvent() {
    const query = `*[_type == "eventPage" && mainImage == true] {
      title,
      date,
      image,
    }`
  
    const events = await client.fetch(query)
    return events;
}


function MainEventBlock({sortBy}) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const fetchedEvents = await getMainEvent();
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
        <div class="flex justify-center">
          

        {sortedEvents.map((event) => (
            <div key={event.title} className="flex flex-col m-auto m-">
                <Bio imageUrl={event.image} />
                
            </div>
        ))}
        </div>
        
    );
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
            <div key={event.title} className="flex flex-row gap-x-16 pt-4">
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
        <div class="w-full h-full bg-[#121212]">
       
      <div class="m-auto text-center">
        <div className={fabulous.className}>
        <h1  class="text-4xl pb-6 text-[#FFFFFF]">Events</h1>
        </div>
        <div class="flex justify-center w-full m-auto text-center">
            <MainEventBlock />
        </div>
        
      </div>


      <div class="flex flex-col ml-28 overflow-hidden">
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





