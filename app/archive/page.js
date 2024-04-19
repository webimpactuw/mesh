import localFont from "next/font/local"
import Link from 'next/link'
const fabulous = localFont({
    src: '../static-fonts/fabulous.otf',
    display: 'swap',
})


export default function ArchivePage() {

    return (
        <div className="bg-black">
            <header className="text-center font-bold p-10 pb-5 text-4xl text-white">
                <h1 className={fabulous.className}>MESH ARCHIVE</h1>
            </header>
            <div className="text-center mb-10 text-white">
                <p1>View photo albums and program booklets from past MESH events</p1>
            </div>
            <div className="flex flex-row-reverse mr-20 ">
                <button class="bg-[#43B697] rounded-lg w-32 text-xl">sort by &nbsp;&#8595;</button>
            </div>
            <div>
                <ArchiveBlock/>
            </div>
        </div>
    );


}


function ArchiveBlock() {
    const archivesInfo = [
        {
            title: "The scene",
            date: "02/24/2024",
            picture: "/images/Arch1.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "XX/XX/XXXX",
            picture: "/images/Arch2.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "XX/XX/XXXX",
            picture: "/images/Arch3.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "XX/XX/XXXX",
            picture: "/images/Arch4.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "XX/XX/XXXX",
            picture: "/images/Arch5.png",
            alt: "tbd",
            program: "links tbd",
            
        },
        {
            title: "Event Title",
            date: "XX/XX/XXXX",
            picture: "/images/Arch6.png",
            alt: "tbd",
            program: "links tbd",
            
        },
    ];
    return (
        <ul className="grid grid-cols-3 ">
        {archivesInfo.map((archive) => (
            <div >
                <div className="">
                    <img src={archive.picture} className="border-2 h-80 w-80 m-10 mb-5" alt={archive.alt} />
                </div>
                <div className="ml-20 justify-items-center text-white text-2xl">
                    <p >{archive.date} {archive.title}</p>
                </div>
                <div className="grid place-content-center mt-1 text-base">
                    <Link href="#" className="inline-flex">
                        <p className="rounded-full px-5 text-white">view program</p>
                        <img src="/images/ButtonArrow.png" className=" pr-5 pb-5 w-14 h-14"></img>
                    </Link>
                </div>
            </div>   
        ))}
        </ul>
    );
 }