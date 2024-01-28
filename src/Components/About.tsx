'use client'

import { useContext, useEffect } from "react";
import Image from "next/image";
import profilepic from "../../public/images/profilepic.jpg";
import { IOContext } from "../context/IOContextProvider";

export const About = ({
  data,
}: {
  data: { image?: string; bio?: string; resumedownload?: string };
}) => {
  const observer = useContext(IOContext),
   // profilepic = data.image ? "images/" + data.image : null,
    bio = data.bio,
    resumeDownload = data.resumedownload;

  useEffect(() => {
    const section = document.getElementById("about");

    if (observer && observer instanceof IntersectionObserver && section)
      observer.observe(section);
  }, []);

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {profilepic && (
            <Image src={profilepic} alt="Nathan's profile picture" />
          )}
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          {bio && <p>{bio}</p>}
          <div className="row">
            <div className="columns download">
              <p>
                {resumeDownload && (
                  <a
                    href={resumeDownload}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
