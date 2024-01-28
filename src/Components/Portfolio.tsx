import Image from "next/image";

export const Portfolio = ({ data }: {data: any}) => {
const projects = data?.projects?.map((projects: Record<string, string>) => {
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
              <Image
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
    });

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
