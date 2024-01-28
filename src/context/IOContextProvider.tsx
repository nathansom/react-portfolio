import { createContext, useEffect, useState } from "react";

export const IOContext = createContext("");

export const IOContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentSectionId, setCurrentSectionId] = useState("home");

  let observer: IntersectionObserver | null = null;

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          let prevIntersectRatio = 0;
          
          if (el.isIntersecting && el.intersectionRatio > prevIntersectRatio) {
            setCurrentSectionId(el.target.id);
            prevIntersectRatio = el.intersectionRatio;
          } 
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.27,
      }
    );

    const sections = [
      ...document.querySelectorAll("section"),
      ...document.querySelectorAll("header"),
      ...document.querySelectorAll("footer"),
    ];

    sections.forEach((section: HTMLElement) => {
      observer?.observe(section);
    });

    return () => {
      observer?.disconnect();
      console.log("unmounted provider");
    };
  }, []);

  return (
    <IOContext.Provider value={currentSectionId}>
        {children}
    </IOContext.Provider>
  );
};
