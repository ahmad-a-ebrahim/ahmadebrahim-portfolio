import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ setOpen }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="nav-li_a"
          onClick={() => {
            if (setOpen) setOpen((prevOpen) => !prevOpen);
          }}
        >
          <li className="nav-li">{item.name}</li>
        </a>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/90 transition-transform duration-100 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Ahmad Ebrahim
          </a>

          <button
            onClick={() => setOpen((prevState) => !prevState)}
            className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={open ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="md:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* mobile */}
      <div className={`nav-sidebar ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems setOpen={setOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
