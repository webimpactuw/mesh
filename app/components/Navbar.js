"use client"; // This is a client component 👈🏽
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navigation sticky top-0 text-white pt-3 z-10 bg-black">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        <Link href="/" className="font-medium text-lg md:hover:underline">
          <Image
            src="/logo.png"
            width={130}
            height={35}
            alt="Mesh logo"
          />
        </Link>
        <div className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
          <Link href="/about" className="text-lg md:hover:underline">ABOUT US</Link>
          <Link href="/involvement" className="text-lg md:hover:underline">GET INVOLVED</Link>
          <Link href="/events" className="text-lg md:hover:underline">EVENTS</Link>
          <Link href="/archive" className="text-lg md:hover:underline">ARCHIVE</Link>
        </div>
        <button onClick={handleClick} className="md:hidden flex flex-col justify-center items-center" aria-label="Toggle Menu">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black p-4 space-y-4">
          <Link href="/about" className="text-lg hover:underline" onClick={handleClick}>ABOUT US</Link>
          <Link href="/involvement" className="text-lg hover:underline" onClick={handleClick}>GET INVOLVED</Link>
          <Link href="/events" className="text-lg hover:underline" onClick={handleClick}>EVENTS</Link>
          <Link href="/archive" className="text-lg hover:underline" onClick={handleClick}>ARCHIVE</Link>
        </div>
      )}
    </nav>
  );
}


