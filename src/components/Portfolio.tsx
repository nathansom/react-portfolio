import Image from "next/image";

export const Portfolio = ({ data }: { data: any }) => {
  const projects = data?.projects?.map(
    (project: {
      title: string;
      category: string;
      image: string;
      url: string;
      paid?: boolean;
      tags?: string[];
    }) => {
      const projectImage = "images/portfolio/" + project.image;

      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a
              href={project.url}
              title={project.title}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                alt={project.title}
                src={projectImage}
                width="400"
                height="195"
              />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 25,
            }}
          >
            {project.tags?.length &&
              project.tags.map((tag: string) => (
                <div style={{ backgroundColor: "silver", color: "#020202", fontSize: "1.25rem", paddingLeft: 4, paddingRight: 4 }}>{tag}</div>
              ))}
          </div>
        </div>
      );
    }
  );

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2 style={{color: "white", textAlign: "center"}}>My Portfolio</h2>

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
