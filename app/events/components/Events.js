/* eslint-disable @next/next/no-img-element */
import BasicModal from "./BasicModal";
import LearnButton from "./LearnButton";

export default function events({imageUrl, title, date}) {
    return (
        <div class="overflow-hidden">
            <div class="flex flex-row justify-between pb-2">
            <h1 class="text-[#FFFFFF] font-light font-sans text-xl">{title}</h1>
            <h1 class="text-[#ADADAD] font-extralight">{date}</h1>
            </div>
            
            <div class=" w-96 overflow-hidden  h-56 border-2 border-cyan-50">


            <img src={imageUrl} alt="model"/>
        </div>
        {/* <LearnButton /> */}
        <BasicModal title={title} date={date} location="test" time="test" description={'test'} imageUrl={imageUrl} />
        </div>
    );
}