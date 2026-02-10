export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* subtle backdrop */}
        <div className="backdrop-blur-sm bg-black/10">
          <div className="max-w-8xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
            
            {/* Brand */}
            <h1 className="font-LXWG text-xl md:text-2xl tracking-wide text-ivory">
              SHRI NATH ART GALLERY
            </h1>
  
            {/* Navigation */}
            <ul className="hidden md:flex items-center md:space-x-10 space-x-4 font-sans text-sm tracking-widest uppercase text-ivory/80">
              <li className="hover:text-ivory transition-colors duration-300 cursor-pointer">
                Gallery
              </li>
              <li className="hover:text-ivory transition-colors duration-300 cursor-pointer">
                About
              </li>
              <li className="hover:text-ivory transition-colors duration-300 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  