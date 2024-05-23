"use client"
import localFont from "next/font/local"
import React, { useState, useEffect} from "react";
import Link from 'next/link'
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})

async function getArchive() {
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
    const [archives, setArchives] = useState([]);

    useEffect(() => {
        async function fetchArchives() {
            const fetchedArchives = await getArchive();
            setArchives(fetchedArchives);
        }

        fetchArchives();
    }, []);

    const sortedArchives = [...archives].sort((a, b) => {
        if (sortBy === 'asc') {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === 'desc') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return 0;
        }
    });
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 items-center">
        {sortedArchives.map((archive) => (
            <div key={archive._id} className="flex flex-col items-center">
                <div className="flex items-center h-80 w-80 ">
                    <img src= {urlForImage(archive.image)} className="border-2 h-full w-full object-cover" alt={archive.alt} />
                </div>
                <div className="flex justify-center text-white text-2xl mt-5">
                    <Link href={archive.programLink} className="flex flew-row">
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
    const [sortBy, setSortBy] = useState('asc');

    const handleSortToggle = () => {
        setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
    };
    return (
        <div className="bg-black">
            <header className="text-center font-bold p-10 pb-5 text-4xl text-white">
                <h1 className={fabulous.className}>ARCHIVE</h1>
            </header>
            <div className="text-center mb-10 text-white">
                <p>View photo albums and program booklets from past MESH events</p>
            </div>
            <div className="flex flex-row-reverse mr-10 mb-10">
                <button onClick={handleSortToggle} className="bg-[#43B697] rounded-lg w-40 p-1 text-xl">
                    sort by {sortBy === 'asc' ? '↑' : '↓'}
                </button>
            </div>
            <div>
                <ArchiveBlock sortBy={sortBy}/>
            </div>
        </div>
    );
}