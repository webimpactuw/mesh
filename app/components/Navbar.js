export default function Navbar() {
    return (
      <nav className="sticky top-0 bg-white text-black z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <a href="/" className="font-medium text-lg md:hover:underline">
            MESH LOGO
          </a>
          <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
              <a href="/blog">ABOUT US</a>
            </li>
            <li className="md:hover:underline">
              <a href="/photos">GET INVOLVED</a>
            </li>
            <li className="md:hover:underline">
              <a href="/photos">EVENTS</a>
            </li>
            <li className="md:hover:underline">
              <a href="/photos">ARCHIVE</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }