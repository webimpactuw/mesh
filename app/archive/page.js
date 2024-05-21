"use client"
import localFont from "next/font/local"
import React, { useState } from "react";
import Link from 'next/link'
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

async function getEvents() {
    const query = `*[_type == "archive"] {
      title,
      date,
      image,
      altText,
      programLink
    }`
  
    const archive = await client.fetch(query)
    return archive;
  }

  function ArchiveBlock({sortBy}) {
    const [archivesInfo, setArchivesInfo] = useState([
        {
            title: "The scene",
            date: "2024-02-24",
            picture: "/images/Arch1.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "2024-02-25",
            picture: "/images/Arch2.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "2024-02-26",
            picture: "/images/Arch3.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "2024-02-27",
            picture: "/images/Arch4.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "2024-02-28",
            picture: "/images/Arch5.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "2024-02-29",
            picture: "/images/Arch6.png",
            alt: "tbd",
            program: "links tbd",
            
        },
    ]);
    const sortedArchives = [...archivesInfo].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === 'oldest' ? dateA - dateB : dateB - dateA;
    });
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 items-center">
        {sortedArchives.map((archive, index) => (
            <div>
                <div className="flex justify-center">
                    <img src={archive.picture} className="border-2 h-80 w-80 m-10 mb-5" alt={archive.alt} />
                </div>
                <div className="flex justify-center text-white text-2xl">
                    <Link href="#" className="flex flew-row">
                        <p>{archive.title}</p>
                        <img src="link_arrow.png" className="pl-3 h-10"></img>
                    </Link>
                </div>
            </div>   
        ))}
        </ul>
    );
 }

export default function ArchivePage() {
    const [sortBy, setSortBy] = useState('oldest');

    const toggleSort = () => {
        setSortBy(sortBy === 'oldest' ? 'newest' : 'oldest');
    };
    return (
        <div className="bg-black">
            <header className="text-center font-bold p-10 pb-5 text-4xl text-white">
                <h1 className={fabulous.className}>ARCHIVE</h1>
            </header>
            <div className="text-center mb-10 text-white">
                <p1>View photo albums and program booklets from past MESH events</p1>
            </div>
            <div className="flex flex-row-reverse mr-10 mb-10">
                <button class="bg-[#43B697] rounded-lg w-40 p-1 text-xl" onClick={toggleSort}>
                    sort by {sortBy === 'oldest' ? 'newest' : 'oldest'} &nbsp;&#8595;
                </button>
            </div>
            <div>
                <ArchiveBlock sortBy={sortBy}/>
            </div>
        </div>
    );
}