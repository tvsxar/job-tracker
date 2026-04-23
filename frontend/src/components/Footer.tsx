function Footer() {
  const linkClasses =
    "hover:text-[#EC4899] transition hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]";

  return (
    <footer className="bg-gray-950 border-t border-gray-200/30 py-8 text-gray-400">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-12 lg:px-25">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg text-gray-200 tracking-wide">
            Jobi
            <span className="text-[#EC4899] drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]">
              fy
            </span>
          </h3>

          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/tvsxar"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/poiatsyka/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
