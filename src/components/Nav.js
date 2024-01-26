import { useContext, useEffect, useRef } from "react";
import { InViewSectionContext } from "../context/IOContextProvider";

export const Nav = () => {
  const scrollY = useRef(0),
    navWrapRef = useRef(null),
    homeRef = useRef(null),
    aboutRef = useRef(null),
    resumeRef = useRef(null),
    portfolioRef = useRef(null),
    testimonialsRef = useRef(null),
    contactRef = useRef(null),
    currentSectionId = useContext(InViewSectionContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollY.current)
        navWrapRef.current.style.display = "none";

      if (window.scrollY <= scrollY.current)
        navWrapRef.current.style.display = "block";

      if (window.scrollY > window.innerHeight) {
        navWrapRef.current.style.backgroundColor = "#ffffff";
      } else {
        navWrapRef.current.style.backgroundColor = "transparent";
      }

      scrollY.current = window.scrollY;
    });
  }, []);

  useEffect(() => {
    if (currentSectionId === "home" && homeRef.current) {
      homeRef.current.classList.add("current");
    } else {
      homeRef.current.classList.remove("current");
    }

    if (currentSectionId === "about" && aboutRef.current) {
      aboutRef.current.classList.add("current");
    } else {
      aboutRef.current.classList.remove("current");
    }

    if (currentSectionId === "resume" && resumeRef.current) {
      resumeRef.current.classList.add("current");
    } else {
      resumeRef.current.classList.remove("current");
    }

    if (currentSectionId === "portfolio" && portfolioRef.current) {
      portfolioRef.current.classList.add("current");
    } else {
      portfolioRef.current.classList.remove("current");
    }

    if (currentSectionId === "testimonials" && testimonialsRef.current) {
      testimonialsRef.current.classList.add("current");
    } else {
      testimonialsRef.current.classList.remove("current");
    }

    if (currentSectionId === "contact" && contactRef.current) {
      contactRef.current.classList.add("current");
    } else {
      contactRef.current.classList.remove("current");
    }
  }, [currentSectionId]);

  return (
    <nav id="nav-wrap" ref={navWrapRef}>
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li ref={homeRef}>
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li ref={aboutRef}>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li ref={resumeRef}>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li ref={portfolioRef}>
          <a className="smoothscroll" href="#portfolio">
            Works
          </a>
        </li>
        <li ref={testimonialsRef}>
          <a className="smoothscroll" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li ref={contactRef}>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
