import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav
      className="flex select-none items-center justify-between 
    border-b-2 border-gray-200 py-4 px-4 sm:px-12 lg:px-25"
    >
      <Logo />

      <Link to='/jobs/new' className='text-black font-semibold text-md rounded-md px-3 h-8 
        cursor-pointer hover:text-[#EC4899] hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.5)] duration-200'>
            <p>Add job</p>
        </Link>
    </nav>
  );
}

export default Navbar;
