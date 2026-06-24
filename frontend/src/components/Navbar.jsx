import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav>
      <div className="nav-logo">
        mb<span>.</span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`} id="navLinks">
        <li><a onClick={closeMenu} href="#about">About</a></li>
        <li><a onClick={closeMenu} href="#skills">Skills</a></li>
        <li><a onClick={closeMenu} href="#projects">Projects</a></li>
        <li><a onClick={closeMenu} href="#education">Education</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact</a></li>
      </ul>

      <a href="mailto:mamtabhatt@email.com" className="nav-cta">
        Hire Me
      </a>

      <button
        className="hamburger"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;