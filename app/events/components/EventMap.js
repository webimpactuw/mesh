/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import Events from "./Events";

const eventsData = [
          
    {imageUrl: '/hat.png', title: 'Modeling Workshop', date: '4/4/2024'},

    {imageUrl: '/cowboy.png', title: 'Next Event', date: '1/2/2024'},
    {imageUrl: '/runway.jpg', title: 'Next Event', date: '1/3/2024'},
    {imageUrl: '/blue.jpg', title: 'Next Event', date: '1/4/2024'},
    {imageUrl: '/phone.jpg', title: 'Next Event', date: '1/5/2024'},
    {imageUrl: '/red.png', title: 'Next Event', date: '1/6/2024'},
    
];




const EventsMap = () => {
    
    const [sortedEvents, setSortedEvents] = useState([...eventsData]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('ascending'); // Track current sorting order

    const sortByDate = () => {
        let sorted;
        if (sortOrder === 'descending') {
            sorted = eventsData.sort((a, b) => new Date(a.date) - new Date(b.date));
            setSortOrder('ascending'); // Update sorting order
        } else {
            sorted = eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setSortOrder('descending'); // Update sorting order
        }
        setSortedEvents(sorted);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            {/* <button onClick={sortByDate}  class="mr-4 px-10 rounded-full bg-[#43B697]"> <div class="flex flex-row gap-x-2">sort by <div class="pt-1"><img src="/↓.png" alt="arrow" class="h-4"/></div></div> </button>
             */}
                <div class=" mr-20 justify-between flex -gap-y-2">
                    <div className="relative text-right mx-auto mr-0">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center bg-[#43B697] py-1 px-10 rounded-full">
                            <div class="flex flex-row gap-x-2 text-xl">sort by 
                                <div class="pt-1"><img src="/↓.png" alt="arrow" class="h-4"/></div>
                            </div>
                        </button>
                    {isDropdownOpen && (
                        <div className=" flex flex-col absolute bg-[#99D8C7]  text-sm w-40 rounded-lg border-[#43B697] border-4">
                            <div class="border-b-2 border-[#43B697]"><button onClick={() => sortByDate('ascending')} className="block w-full text-center px-4 py-2 hover:bg-gray-100 focus:outline-none">Date: ascending</button></div>
                            <button onClick={() => sortByDate('descending')} className="block w-full text-center px-4 py-2 hover:bg-gray-100 focus:outline-none">Date: descending</button>
                        </div>
                    )}
                </div>
        </div>
        <div class="h-20"></div>
            
        <div class="grid grid-cols-3 gap-4">
            {sortedEvents.map((event, index) => (
                <div key={index} className="flex flex-row gap-x-16 pt-4">
                    <Events imageUrl={event.imageUrl} title={event.title} date={event.date} />
                </div>
            ))}
        </div>
        </div>
    )
}

export default EventsMap