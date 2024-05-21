"use client";
import LearnButton from "./LearnButton";
import { Jost } from "next/font/google";
import BasicModal from "./BasicModal";


const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '600'], 
  })

export default function Bio() {
    return (

        <div className={jost.className}>
        <p class="text-[#FFFFFF] w-3/5 py-4 m-auto text-xl font-light">A yearly event where students, designers, and fashion enthusiasts come  together to explore style, creativity, and the limitless horizons of the fashion world</p>
        {/* <LearnButton /> */}
        <BasicModal />
        </div>

    );
}