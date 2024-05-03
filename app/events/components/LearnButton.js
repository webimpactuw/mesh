/* eslint-disable @next/next/no-img-element */
export default function LearnButton({link}) {
    const learn = () => {
        console.log('Learn more')
    }


    return (
    <div class="flex flex-row m-auto justify-center">
        <a href={link} class="flex flex-row m-auto justify-center">
        <button onClick={learn} class="text-[#FFFFFF] font-sans text-lg font-light">Learn More </button>
        <img src="/arrowup.png" alt="arrow" class="h-10"/>
        </a>
    </div>
    );
}