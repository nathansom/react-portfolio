import { useContext, useEffect } from "react";

import { IOContext } from "../context/IOContextProvider";

export const Resume = ({ data }) => {
  const skillmessage = data?.skillmessage,
    education = data?.education?.map((education) => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    }),
    work = data?.work?.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    }),
    skills = data?.skills?.map((skills) => {
      const className = "bar-expand " + skills.name.toLowerCase();

      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    }),
    observer = useContext(IOContext);

  useEffect(() => {
    const section = document.getElementById("resume");;

    if (observer && section)
      (observer as IntersectionObserver).observe(
        section
      );
  }, []);

  return (
    <section id="resume">
      <div className="divider-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2B2B2B"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
        >
          <path d="M1000 0L0 100h1000V0z"></path>
        </svg>
      </div>
      {education && (
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      )}

      {work && (
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      )}

      {skills && (
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {skillmessage && <p>{skillmessage}</p>}

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      )}
      <div className="divider-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2B2B2B"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M1000,0l-500,98l-500,-98l0,100l1000,0l0,-100Z"
            className="opacity-04"
          ></path>
          <path d="M1000,20l-500,78l-500,-78l0,80l1000,0l0,-80Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Resume;
