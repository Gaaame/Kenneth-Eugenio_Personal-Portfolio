import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    closeMenu();

    const hash = href.split("#")[1];

    // If we're already on the homepage
    if (window.location.pathname === "/") {
      if (hash === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // If we're on another page, navigate to the homepage first
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-slate-50/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              closeMenu();

              if (window.location.pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 100);
              }
            }}
            className="group relative flex items-center gap-2"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-md transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-orange-400 group-hover:shadow-lg">
              KE
            </span>

            <span className="hidden text-sm font-semibold tracking-wide text-gray-700 sm:block">
              Kenneth
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
                  >
                    {item.label}

                    <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl sm:inline-flex"
            >
              Contact Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 md:hidden"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}

                    <span className="text-blue-500">→</span>
                  </a>
                </li>
              ))}

              {/* Mobile Contact Button */}
              <li className="mt-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-400"
                >
                  Contact Me
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
