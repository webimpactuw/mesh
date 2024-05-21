/* eslint-disable @next/next/no-img-element */
import { urlForImage } from "@/sanity/lib/image";
import LearnButton from "./LearnButton";

export default function events({ post }) {
    return (
        <div class="overflow-hidden">
            <div class="flex flex-row justify-between pb-2">
            <h1 class="text-[#FFFFFF] font-light font-sans text-xl">{post.title}</h1>
            <h1 class="text-[#ADADAD] font-extralight">{post.date}</h1>
            </div>
            
            <div class=" w-96 overflow-hidden  h-56 border-2 border-cyan-50">


            <img src={urlForImage(post.image)} alt={post.title}/>
        </div>
        <LearnButton />
        </div>
    );
}