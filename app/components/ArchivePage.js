export default function ArchivePage() {
    return (
        <div>
            <header className="text-center font-bold p-10 mb-10 text-2xl">
                <h1>MESH ARCHIVE</h1>
            </header>
            <div className="flex flex-row-reverse mr-20 ">
                <button class="bg-slate-300 rounded-lg w-24">sort by &#8595;</button>
            </div>
            <div className="grid grid-cols-3">
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />

            </div>
        </div>
    );

 function Block() {
    return (
        <div>
            <div className="p-10">
                <img src="tempImage.jpg" width="300" height="300" alt="When images are added, this should have real alt text" />
            </div>
            <div className="ml-14 inline-block">
                <p>Title / Date</p>
            </div>
            <div className="ml-5 inline-block">
                <button class="bg-slate-300 rounded-full px-5">view program</button>
            </div>
        </div>
    );
 }
}