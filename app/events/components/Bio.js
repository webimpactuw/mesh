/* eslint-disable @next/next/no-img-element */

"use client";
import { Jost } from "next/font/google";
import BasicModal from "./BasicModal";
import { urlForImage } from "@/sanity/lib/image";


const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '600'], 
  })


export default function Bio({imageUrl}) {

    return (

        <div className={jost.className}>
            <div class=" flex flex-col w-full h-full justify-center mx-auto">
                <div>
                    <img src={urlForImage(imageUrl)} alt="audience" class="w-2/3 m-auto border-2 border-cyan-50"/>
                </div>
                
            <p class="text-[#FFFFFF] w-3/5 py-4 m-auto text-xl font-light">A yearly event where students, designers, and fashion enthusiasts come  together to explore style, creativity, and the limitless horizons of the fashion world</p>
            {/* <LearnButton /> */}
            
            <BasicModal title="Fashion Show" date="5/2/2024" time="3:30pm" description="A yearly event where students, designers, and fashion enthusiasts come  together to explore style, creativity, and the limitless horizons of the fashion world" location="Location" imageUrl={imageUrl} />
            </div>
        </div>

    );
}