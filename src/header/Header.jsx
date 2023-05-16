import logo from './../images/logo.svg';
import menuImage from './../images/icon-hamburger.svg';

export default function Header() {
  return (
    <header className="bg-cyan-100 text-white text-md font-sans p-6 ">
      <nav className="flex flex-row justify-between items-center ">
        <a href="#">
          <img src={logo} alt="logo"></img>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="cursor-pointer flex flex-row">
            <li>
              <a
                className="block py-3 px-8 m-auto hover:bg-blue-500 rounded-3xl align-middle"
                href="#"
              >
                About
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="block py-3 px-8 hover:bg-blue-500 rounded-3xl"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="block py-3 px-8 hover:bg-blue-500 rounded-3xl"
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="block py-3 px-8 hover:bg-blue-500 rounded-3xl"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu
        <div className="visible md:hidden">
          <img
            className="cursor-pointer hover:bg-blue-500 p-4 w-16 h-16"
            src={menuImage}
            alt="menu icon"
          ></img>
        </div>
        <div className="absolute left-0  w-full h-1/3 top-[15%] bg-white text-blue-500 flex after:bg-white after:triangle">
          <ul className="w-full z-50 cursor-pointer flex flex-col justify-center gap-8 items-center text-xl ">
            <li>
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Services</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
}
