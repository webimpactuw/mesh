import localFont from "next/font/local"

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

export default function about() {
  return (
    <div>
      <div className={fabulous.className}>
        <h1 className="text-center text-white text-3xl">About Us</h1>
      </div>

      <div className="flex justify-end pr-12">
        <div className="w-1/2 bg-black-200 p-4">
        <div className="w-1/2 h-16"></div>
        <div className="w-1/2 h-2 bg-green-300"></div>
        <div className="w-1/2 h-3"></div>
        <h1 className="text-left text-white text-3xl">Who Are We?</h1>
        <h1 className="text-left text-white text-m">MESH is a creative collective based at the University of Washington that centers fashion design education and exploration. </h1>
        <h1 className="text-left text-white text-m">We aim to foster a lively community of fashion enthusiasts through beginner-friendly workshops, highly participatory large events, and networking/experience opportunities.  </h1>
        <h1 className="text-left text-white text-m">Our headline event is an annual, student-run fashion show! </h1>
        </div>
      </div>

    </div>
  );
}