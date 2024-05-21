
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import LearnButton from './components/LearnButton';
import Events from './components/Events';
import Navbar from '../components/Navbar';
import { Jost } from "next/font/google";
import { client } from '@/sanity/lib/client';
import Bio from './components/Bio';



import "../globals.css";
import localFont from "next/font/local"

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'], 
})



import EventsMap from './components/EventMap';


export default function events() {
  return (
    <div class="w-full h-full bg-[#121212]">
       
      <div class="m-auto text-center">
        <div className={fabulous.className}>
        <h1  class="text-4xl pb-6 text-[#FFFFFF]">MESH EVENTS</h1>
        </div>

        <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
          <Image src="/audience.png" width={1000} height={500} alt="audience" />
        </figure>
        <Bio />
      </div>

      <div class="flex flex-col ml-28">
      <EventsMap />
      
        
        
      </div>

    </div>
  );}



