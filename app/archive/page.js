export default function ArchivePage() {

    return (
        <div className="bg-black">
            <header className="text-center font-bold p-10 pb-5 text-2xl text-white">
                <h1>MESH ARCHIVE</h1>
            </header>
            <div className="text-center mb-10 text-white">
                <p1>View Photo Albums of past MESH events</p1>
            </div>
            <div className="flex flex-row-reverse mr-20 ">
                <button class="bg-slate-300 rounded-lg w-24">sort by &#8595;</button>
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
            date: "2/24/2024",
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
        <ul className="grid grid-cols-3">
        {archivesInfo.map((archive) => (
            <div >
                <div className="">
                    <img src={archive.picture} className="object-fit" width="346" height="346" alt="When images are added, this should have real alt text" />
                </div>
                <div className="ml-14 inline-block text-white">
                    <p >{archive.date} {archive.title}</p>
                </div>
                <div className="ml-5 inline-block">
                    <button class=" rounded-full px-5 text-white">view program</button>
                </div>
            </div>   
        ))}
        </ul>
    );
 }