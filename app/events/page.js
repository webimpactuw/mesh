
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { Jost } from "next/font/google";
import Bio from './components/Bio';




import "../globals.css";
import localFont from "next/font/local"

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})



import EventsMap from './components/EventMap';

export default function events() {
  
  return (
    <div class="w-full h-full bg-[#121212]">
       
      <div class="m-auto text-center">
        <div className={fabulous.className}>
        <h1  class="text-4xl pb-6 text-[#FFFFFF]">Events</h1>
        </div>

        <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
          <Image src="/audience.png" width={1000} height={500} alt="audience" />
        </figure>
        <Bio imageUrl="/audience.png" />
      </div>

      <div class="flex flex-col ml-28">
      <EventsMap />
        
      </div>
    </div>
  );}





