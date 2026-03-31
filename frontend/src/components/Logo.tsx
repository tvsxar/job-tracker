import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/" className="text-2xl font-bold">
        Jobi
        <span className="text-[#EC4899] drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]">
          fy
        </span>
      </Link>
    </>
  );
}

export default Logo;
