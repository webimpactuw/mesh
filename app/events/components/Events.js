/* eslint-disable @next/next/no-img-element */
"use client";
import { urlForImage } from "@/sanity/lib/image";
import BasicModal from "./BasicModal";

export default function events({imageUrl, title, date}) {
    return (
        <div class="overflow-hidden">
            <div class="flex flex-row justify-between pb-2">
            <h1 class="text-[#FFFFFF] font-light font-sans text-xl">{title}</h1>
            <h1 class="text-[#ADADAD] font-extralight">{date}</h1>
            </div>
            
            <div class=" w-96 overflow-hidden  h-56 border-2 border-cyan-50">

                <img src={urlForImage(imageUrl)} alt={title}/>
            </div>
        {/* <LearnButton /> */}
        <BasicModal title={title} date={date} location="Location" time="5:00pm" description={'Description'} imageUrl={imageUrl} />
        </div>
    );
}