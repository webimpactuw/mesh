export default function ArchivePage() {
    return (
        <div>
            <div className="text-center font-bold p-10 mb-10 text-2xl">
                <h1>MESH ARCHIVE</h1>
            </div>
            <div className="flex flex-row-reverse mr-24 ">
                <button class="bg-slate-300 rounded-lg w-24">sort by</button>
            </div>
            <div className="flex flex-row place-content-center">
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="ml-24 basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="">
                    <button class="bg-slate-300 rounded-lg w-32">view program</button>
                </div>
                <div className="ml-48 basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="mr-52">
                    <button class="bg-slate-300 rounded-lg w-24">view program</button>
                </div>
                <div className="basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="mr-52">
                    <button class="bg-slate-300 rounded-lg w-24">view program</button>
                </div>
            </div>
            <div className="flex flex-row place-content-center mt-10">
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
                <div className="p-10">
                    <img src="tempImage.jpg" width="300" height="300" alt="" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="ml-20 basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="mr-80">
                    <button class="bg-slate-300 rounded-lg w-24">view program</button>
                </div>
                <div className="basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="mr-80">
                    <button class="bg-slate-300 rounded-lg w-24">view program</button>
                </div>
                <div className="basis-1/3">
                    <p>Title / Date</p>
                </div>
                <div className="mr-80">
                    <button class="bg-slate-300 rounded-lg w-24">view program</button>
                </div>
            </div>
        </div>
    );
}