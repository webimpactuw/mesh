/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import LearnButton from './components/LearnButton';
import Events from './components/Events';
import Navbar from '../components/Navbar';

export default function events() {
  return (
    <div class="w-full h-full bg-[#121212]">
       <Navbar/>
      <div class="m-auto text-center">
        <h1 class="text-4xl pb-6 text-[#FFFFFF]">MESH EVENTS</h1>
        

        <figure class="w-2/3 overflow-hidden m-auto b-[#FFFFFF] border-2">
          
          <Image src="/audience.png" width={1000} height={500} alt="audience" />
        </figure>



        <div class="flex flex-row m-auto"></div> 
        <p class="text-[#FFFFFF] w-3/5 py-4 m-auto">A yearly event where students, designers, and fashion enthusiasts come  together to explore style, creativity, and the limitless horizons of the fashion world</p>
        <LearnButton />
        
      </div>

      <div class="flex flex-col ml-28">
        <div id="button" class=" space-x-4 mr-28 m-auto text-[#050505]">
          <button class="mr-4 px-10 rounded-full bg-[#43B697]"> <div class="flex flex-row gap-x-2">sort by <div class="pt-1"><img src="/↓.png" alt="arrow" class="h-4"/></div></div> </button>
          
        </div>
        

      <div class="flex flex-row gap-x-16 pt-4">
        <Events imageUrl={'/hat.png'} title={"Modeling Workshop"} date={"4/4/2024"}/>
        <Events imageUrl={'/cowboy.png'} title={"Next Event"} date={"X/X/20XX"}/>
        <Events imageUrl={'/runway.jpg'} title={"Next Event"} date={"X/X/20XX"}/>
      </div>

      <div class="flex flex-row gap-x-16 pt-4">
        <Events imageUrl={'/blue.jpg'} title={"Next Event"} date={"X/X/20XX"}/>
        <Events imageUrl={'/phone.jpg'} title={"Next Event"} date={"X/X/20XX"}/>
        <Events imageUrl={'/red.png'} title={"Next Event"} date={"X/X/20XX"}/>
      </div>
        
        
      </div>

    </div>
  );}

