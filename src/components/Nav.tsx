'use client'

import { useContext, useEffect, useRef } from "react";

import { IOContext } from "../context/IOContextProvider";

export const Nav = () => {
  const scrollY = useRef(0),
    navWrapRef = useRef<HTMLDivElement>(null),
    currentSectionId = useContext(IOContext);

  useEffect(() => {
    const handleOnScroll = () => {
      if (navWrapRef.current) {
        if (window.scrollY > scrollY.current)
          navWrapRef.current.style.display = "none";

        if (window.scrollY <= scrollY.current)
          navWrapRef.current.style.display = "block";

        if (window.scrollY > window.innerHeight) {
          navWrapRef.current.style.backgroundColor = "#ffffff";
        } else {
          navWrapRef.current.style.backgroundColor = "transparent";
        }
      }

      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <nav id="nav-wrap" ref={navWrapRef}>
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li
          className={currentSectionId === "home" ? "current" : ""}
        >
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li
          className={currentSectionId === "about" ? "current" : ""}
        >
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li
          className={currentSectionId === "resume" ? "current" : ""}
        >
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li
          className={currentSectionId === "portfolio" ? "current" : ""}
        >
          <a className="smoothscroll" href="#portfolio">
            Works
          </a>
        </li>
        <li
          className={currentSectionId === "testimonials" ? "current" : ""}
        >
          <a className="smoothscroll" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li
          className={currentSectionId === "contact" ? "current" : ""}
        >
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
