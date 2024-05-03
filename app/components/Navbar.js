import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="navigation sticky top-0 text-white pt-3 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">
            <Image 
              src="/logo.png"
              width={130}
              height={35}
              alt="Mesh logo"
            />
          </Link>
          <ul className="nphidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
              <Link href="/about" className="text-lg">ABOUT US</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/involvement" className="text-lg">GET INVOLVED</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/events" className="text-lg">EVENTS</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/archive" className="text-lg">ARCHIVE</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }