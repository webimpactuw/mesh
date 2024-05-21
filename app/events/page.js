"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import LearnButton from './components/LearnButton';
import Events from './components/Events';
import Navbar from '../components/Navbar';
import { Jost } from "next/font/google";



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
       {/* <Navbar/> */}
      <div class="m-auto text-center">

        <div className={fabulous.className}>
        <h1 class="text-4xl pb-6 text-[#FFFFFF]">EVENTS</h1>
        </div>


        <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
          <Image src="/audience.png" width={1000} height={500} alt="audience" />
        </figure>



        <div className={jost.className}>
        <p class="text-[#FFFFFF] w-3/5 py-4 m-auto text-xl font-light">A yearly event where students, designers, and fashion enthusiasts come  together to explore style, creativity, and the limitless horizons of the fashion world</p>
        <LearnButton />
        </div>

      </div>

      <div class="flex flex-col ml-28">
        


      <EventsMap />
        
        
      </div>

    </div>
  );}

