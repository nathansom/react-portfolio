import { useContext, useEffect } from "react";
import { IOContext } from "../context/IOContextProvider";

export const Portfolio = ({ data }) => {
  const projects = data?.projects?.map((projects) => {
    const projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a
            href={projects.url}
            title={projects.title}
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img
              alt={projects.title}
              src={projectImage}
              width="400"
              height="195"
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  }),
  observer = useContext(IOContext);

  useEffect(() => {
    observer.observe(document.getElementById("portfolio"));
  }, [])

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Creations</h1>

          {projects && (
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
